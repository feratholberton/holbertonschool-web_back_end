#!/usr/bin/env python3
"""Write a Python function that returns a list of schools having a specific topic"""


def schools_by_topic(mongo_collection, topic):
    """
    Retrieves the list of documents in "mongo_collection" containing "topic"
    within their "topics" array.
    """
    if mongo_collection is None or topic is None:
        return []

    return list(mongo_collection.find({"topics": topic}))
