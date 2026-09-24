"""Combined Batch A football posts, ids 158–177."""
from batch_a_part1 import POSTS_1
from batch_a_part2 import POSTS_2
from batch_a_part3 import POSTS_3
from batch_a_part4 import POSTS_4
from batch_a_part5 import POSTS_5
from batch_a_part6 import POSTS_6
from batch_a_part7 import POSTS_7
from batch_a_part8 import POSTS_8

from batch_a_more import MORE

POSTS = (
    POSTS_1
    + POSTS_2
    + POSTS_3
    + POSTS_4
    + POSTS_5
    + POSTS_6
    + POSTS_7
    + POSTS_8
)
for _p in POSTS:
    extra = MORE.get(_p["slug"])
    if extra:
        _p["more_h2"] = extra["h2"]
        _p["more_paras"] = extra["paras"]
        if extra.get("excerpt"):
            _p["excerpt"] = extra["excerpt"]
