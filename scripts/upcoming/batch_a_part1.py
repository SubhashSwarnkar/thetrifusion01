# Posts 158–167. Unique copy; facts tied to the sources named in each verify note.

def L(*pairs):
    return list(pairs)


POSTS_1 = []

POSTS_1.append(dict(
    id=158,
    slug="arsenal-vs-leeds-10-oct-2026-preview",
    title="Arsenal vs Leeds 10 Oct 2026: Time IST & TV",
    metaTitle="Arsenal vs Leeds 10 Oct 2026 — 17:00 IST, TNT Sports | TheTriFusion",
    excerpt="Arsenal host Leeds on 10 Oct 2026 at 12:30 BST (17:00 IST) at the Emirates. TNT Sports in the UK, India watch notes, non-betting guide.",
    og1="Arsenal vs Leeds:",
    og2="10 Oct — 17:00 IST",
    hue=8,
    layout="clock",
    tags=["arsenal vs leeds", "premier league", "10 october 2026", "emirates", "football"],
    opener="Saturday lunchtime in north London is a different Premier League habit from the 17:30 kick-offs that fill Indian group chats. On 10 October 2026 Arsenal host Leeds United with the official early slot at 12:30 BST, which is 17:00 IST and 7:30am EDT. The Premier League’s October broadcast note gives this match to TNT Sports, not Sky. It is the first Arsenal league appointment after the pause that followed 20 September, and it is easy to confuse with Manchester United vs Tottenham later the same day. This guide separates those clocks before anyone sets the wrong alarm.",
    verify="Kick-off and the UK broadcaster follow the Premier League fixture-amendment notice for October and early November, mirrored by Radio Times, which lists Arsenal v Leeds at 12:30pm on TNT Sports 1, TNT Sports Ultimate and HBO Max. The match is at Arsenal’s Emirates Stadium. India coverage sits with Star Sports and JioHotstar under the 2026/27 JioStar rights reported by Sporting News. The exact Star channel bug can still move in the weekly EPG.",
    time_h2="Date and time in IST",
    rows=L(
        ("Date", "Saturday, 10 October 2026"),
        ("Kick-off UK", "12:30 BST"),
        ("Kick-off India", "17:00 IST"),
        ("Kick-off US East", "7:30am EDT"),
        ("Venue", "Emirates Stadium, London"),
        ("Competition", "Premier League 2026/27, Matchweek 6"),
        ("UK selection", "TNT Sports"),
    ),
    time_note="British Summer Time is still in force on 10 October. The UK does not return to GMT until the early hours of Sunday 25 October 2026. Add four hours and thirty minutes to 12:30 BST and you get 17:00 IST. A card that says 5:30pm UK is the Manchester United vs Tottenham kick-off later on the same Saturday, not this one.",
    watch_h2="Where to watch in India, the UK, and the US",
    india="Sporting News’ 2026/27 India guide puts the Premier League on Star Sports television and on JioHotstar for streaming. Open the app before 16:45 IST and search the match title. Channel numbers move when cricket and football share a Saturday, so the EPG on the night before is more reliable than a screenshot from August. This page does not claim a single Star Sports channel digit.",
    uk="TNT Sports holds the Saturday 12:30 Premier League selection in the current UK cycle. Radio Times lists TNT Sports 1, TNT Sports Ultimate and HBO Max for this fixture. FourFourTwo notes that TNT and HBO Max carry 52 live Premier League matches in 2026/27, while Sky Sports carries the larger package, including the 17:30 game on this same Saturday. If you only have Sky, you will not get Arsenal vs Leeds live on that subscription.",
    us="NBC, USA Network and Peacock share US Premier League rights, as FourFourTwo’s rights table describes. A 7:30am EDT start is early for a linear morning show, and the weekly Peacock grid is what decides whether this particular match is streamed. We are not assigning a US channel number that has not been published for this kick-off.",
    safety="Use the licensed feed. Unofficial streams break the broadcast rights and are a common way match-day devices pick up malware.",
    sections=[
        ("Why this is not the other Arsenal game that week", [
            "Arsenal’s October is a chain. The Emirates lunchtime against Leeds is Matchweek 6, the first league weekend back after the international pause. On Tuesday 13 October Arsenal host Lille in the Champions League at the same stadium, a tie already previewed on this site, which reaches India at 00:30 IST on Wednesday 14 October. Eight days after Leeds, Arsenal go to the City Ground to face Nottingham Forest at 16:30 BST on Sunday 18 October, selected by Sky Sports. On 21 October they travel to Munich to face Bayern, again landing at 00:30 IST on the Thursday. The first weekend of November is Anfield: Liverpool vs Arsenal on Sunday 1 November at 16:30 GMT, which is 22:00 IST. Saving one Arsenal alarm does not cover the others.",
            "Leeds supply a second trap. This match is Arsenal at home. Leeds vs Manchester United is a different fixture, at Elland Road on Sunday 18 October at 14:00 BST (18:30 IST), also on Sky. Search boxes that only contain the word Leeds will mix the two. If you are building a watch list, write the home team first and the kick-off in IST on the calendar title.",
        ]),
        ("The ground, and what is still not confirmed", [
            "The Emirates Stadium is in Holloway, north London. A 12:30 BST kick-off means ticket holders are moving well before noon local time. We are not listing prices or claiming that any stand is available. The club and the Premier League are the places for that. For viewers in India the practical point is kinder: 17:00 IST on a Saturday is after most office hours, which is why a UK lunchtime slot often draws a cleaner Indian audience than a 15:00 BST kick-off that lands during dinner.",
            "Starting elevens are not yet confirmed. Both squads come out of the FIFA window that kept the Premier League dark after 20 September. Minutes, travel and any injury notes belong to the pre-match press conferences and to the official sheet about an hour before kick-off. A forwarded team graphic is not a team sheet. We are also not publishing a predicted score. The useful questions are football questions: who looks short of rhythm in the first twenty minutes, which full-back gets forward first, and how both sides defend set pieces while the ground is still filling.",
        ]),
        ("How to read the table that morning", [
            "Matchweek 6 means the table you want is the one premierleague.com shows on Saturday morning, after five completed rounds. We will not invent positions, goal differences or a form string. Sky Sports, in its October and November TV piece, refers to Arsenal as champions when it previews the November meeting with Liverpool. That describes the title won before this campaign. It is not a forecast of where Arsenal will sit at 12:30 on 10 October.",
            "If you republish the clock, quote 12:30 BST and 17:00 IST together and name the Premier League notice as the source. If the league moves the match, change the sentence and the SportsEvent startDate on the same edit. A wrong IST conversion is copied into WhatsApp faster than a correction. Publishers who run event hubs for clubs or broadcasters usually store the kick-off in UTC and render Asia/Kolkata beside the venue clock. That is the same pattern TheTriFusion uses on its own match pages.",
        ]),
    ],
    expect_h2="What to watch, without a score guess",
    expect=[
        "Whether Arsenal’s early pressure leaves space for Leeds on the break.",
        "Set pieces in the first half hour, when Saturday lunchtime games are often decided.",
        "Which players have heavy international minutes in their legs.",
        "How the bench is used with Lille due at the same ground three days later.",
        "The official team sheet, not a social leak, about an hour before kick-off.",
    ],
    expect_note="Nothing on this page is a betting tip. There are no odds and no suggested scoreline.",
    checks=[
        "Set the alarm for 16:45 IST, not for 22:00.",
        "Confirm TNT Sports in the UK and JioHotstar or Star Sports in India the night before.",
        "Do not mix this match with United vs Tottenham at 17:30 BST the same day.",
        "Ignore any XI that is not on a club channel.",
        "Keep the Lille and Forest dates as separate calendar events.",
    ],
    live_links=L(
        ("/blog/arsenal-vs-lille-ucl-13-oct-2026", "Arsenal vs Lille three days later"),
        ("/blog/man-united-vs-tottenham-10-oct-2026-preview", "Man United vs Tottenham the same Saturday"),
        ("/blog/liverpool-vs-man-city-11-oct-2026-preview", "Liverpool vs Man City on 11 October"),
    ),
    sib_sentence='The Leeds home match against Manchester United is covered in <a href="/blog/leeds-vs-man-united-18-oct-2026-preview">a separate 18 October guide</a>.',
    hub="/web-development",
    hub_label="web development",
    faqs=L(
        ("What time is Arsenal vs Leeds in India?", "17:00 IST on Saturday 10 October 2026, from the official 12:30 BST kick-off."),
        ("Which UK channel shows Arsenal vs Leeds?", "TNT Sports. Radio Times lists TNT Sports 1, TNT Sports Ultimate and HBO Max for the 12:30 slot."),
        ("Where can viewers in India watch?", "Star Sports on television and JioHotstar for streaming, under the 2026/27 Premier League rights. Confirm the channel in the EPG."),
        ("Is the match at Elland Road?", "No. Arsenal are at home at the Emirates Stadium. Leeds host Manchester United at Elland Road on 18 October."),
        ("Are the lineups confirmed?", "Not yet confirmed. Use the club team sheets about an hour before kick-off."),
        ("Does this page include betting tips?", "No. It is a schedule and watch guide only."),
    ),
    close="Bookmark the 17:00 IST kick-off, then check the Premier League site again on Friday in case a broadcast detail moves. The football starts when the referee does, not when a recycled graphic says it does.",
    event=dict(
        type="SportsEvent",
        name="Arsenal vs Leeds United",
        startDate="2026-10-10T17:00:00+05:30",
        organizer="Premier League",
        location=dict(name="Emirates Stadium", addressLocality="London", addressCountry="GB"),
    ),
))
