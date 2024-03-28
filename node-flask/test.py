from flask import Flask, jsonify, request
from pymongo import MongoClient
from flask_caching import Cache
import os

# cache = Cache(config={"CACHE_TYPE": "simple"})
app = Flask(__name__, instance_relative_config=True)
# cache.init_app(app)


client = MongoClient(
    "mongodb+srv://abdelrhmanarafa:SzbZ07ndtx0wlIg7@deployment.44r3nxg.mongodb.net/"
)
db = client["JobPostings"]
company_collection = db["companies"]
location_collection = db["locations"]
skill_collection = db["skills"]
job_collection = db["Jobs"]

@app.route("/Jobs", methods=["GET"])
# @cache.cached(timeout=3600)
def get_job_counts():
    year = request.args.get("year")
    month = request.args.get("month")
    country = request.args.get("country")
    pipeline = []
    if year is not None:
        year = int(year)
        pipeline.append({"$match": {"year": year}})
    if month is not None:
        month = int(month)
        pipeline.append({"$match": {"month": month}})
    if country is not None:
        pipeline.append({"$match": {"country": country}})

    pipeline.extend([
        {"$group": {"_id": "$key_job", "count": {"$sum": 1}}},
        {"$project": {"key_job": "$_id", "count": 1, "_id": 0}},
        {"$sort": {"count": -1}}
    ])
    job_counts = list(job_collection.aggregate(pipeline))
    result_dict = {entry["key_job"]: entry["count"] for entry in job_counts}
    print(result_dict)
    return jsonify(result_dict)


@app.route("/Jobs/Skill/<track_name>", methods=["GET"])
# @cache.cached(timeout=3600)
def get_most_frequent_skills(track_name):
    pipeline = [
        {
            "$lookup": {
                "from": "Skills",
                "localField": "skill_ids",
                "foreignField": "_id",
                "as": "job_result",
            }
        },
        {
            "$unwind": {
                "path": "$job_result",
                "includeArrayIndex": "string",
                "preserveNullAndEmptyArrays": False,
            }
        },
        {"$project": {"key_job": 1, "job_result": {"skill_name": 1}}},
        {"$match": {"key_job": track_name}},
        {"$group": {"_id": "$job_result.skill_name", "count": {"$sum": 1}}},
        {"$sort": {"count": -1}},
    ]

    result = list(job_collection.aggregate(pipeline))

    result_dict = {
        item["_id"]: {
            "count": item["count"],
        }
        for item in result
    }

    print(result_dict)

    return jsonify(result_dict)


if __name__ == "__main__":
    app.run()