#!/usr/bin/env python3
"""Import wait_random from the previous python file"""
import asyncio
from typing import List
wait_random = __import__('0-basic_async_syntax').wait_random


async def wait_n(n: int, max_delay: int) -> List[float]:
    """Takes in 2 int arguments (in this order): n and max_delay"""
    tasks = []
    for i in range(n):
        tasks.append(wait_random(max_delay))

    delays = []
    for task in asyncio.as_completed(tasks):
        delays.append(await task)

    return delays
