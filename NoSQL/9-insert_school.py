#!/usr/bin/env python3
"""Write a Python function that inserts a new document in a collection based on kwargs"""

from pymongo import MongoClient


def insert_school(mongo_collection, **kwargs):
    """Inserts a new document in a collection based on kwargs and returns the new _id"""
    
    result = mongo_collection.insert_one(kwargs)
    return result.inserted_id
