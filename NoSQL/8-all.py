#!/usr/bin/env python3
"""Write a Python function that lists all documents in a collection:"""

from pymongo import MongoClient


def list_all(mongo_collection) -> list:
    """Lists all documents in a collection"""
    return list(mongo_collection.find())