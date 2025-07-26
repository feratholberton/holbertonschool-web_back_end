#!/usr/bin/env python3
"""Type-annotated function"""
from typing import Callable


def make_multiplier(multiplier: float) -> Callable[[float], float]:
    """Returns a function that multiplies a float by multiplier"""
    return lambda float_value: float_value * multiplier
