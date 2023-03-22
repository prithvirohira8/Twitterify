import React from "react";
import { motion } from "framer-motion";
import { Breakpoint } from "react-socks";
import {
  MdSentimentNeutral,
  MdSentimentSatisfiedAlt,
  MdSentimentVeryDissatisfied,
} from "react-icons/md";

function Collapse({ RightComponent, click }) {
  return (
    <div onClick={click} tabIndex={0} className="collapse w-full">
      <div className="link collapse-title text-sm text-right">Read more</div>
      <div className="collapse-content w-full">{RightComponent}</div>
    </div>
  );
}

function TrendingDropdown({ trends }) {
  const smoothScroll = (hashtag) => {
    const element = document.getElementById(hashtag);
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <div className="dropdown">
        <label tabIndex={0} className="btn btn-sm normal-case">
          Trending Today
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-fit min-w-[15rem]"
        >
          {trends.latest_trends.map((trend, idx) => (
            <li>
              <a
                key={idx}
                className="text-sm"
                style={{ textDecoration: "none", cursor: "pointer" }}
                onClick={() => smoothScroll(trend.topic_name)}
              >
                {trend.topic_name.replaceAll(" ", "_")}{" "}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

function SentimentDiv({ trend }) {
  return (
    <div className="flex justify-between gap-3 text-center text-xl cursor-auto p-2">
      <div
        className="tooltip tooltip-left flex justify-between gap-2"
        data-tip="Positive"
      >
        <span className="stat-figure text-green-600">
          <MdSentimentSatisfiedAlt size={25} />
        </span>
        {trend["pos"]}
      </div>
      <div
        className="tooltip tooltip-top flex justify-between gap-2"
        data-tip="Neutral"
      >
        <span className="stat-figure text-yellow-600">
          <MdSentimentNeutral size={25} />
        </span>
        {trend["neu"]}
      </div>
      <div
        className="tooltip tooltip-tops flex justify-between gap-2"
        data-tip="Negative"
      >
        <span className="stat-figure text-red-600">
          <MdSentimentVeryDissatisfied size={25} />
        </span>
        {trend["neg"]}
      </div>
    </div>
  );
}

function TrendingCard({
  index,
  trend,
  hashtag,
  setReadTweets,
  RightComponent,
}) {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div
          id={`${hashtag}`}
          className="card min-w-[57rem] shadow-md rounded !bg-[#2222224a]"
          style={{ margin: "2vh 1vw" }}
        >
          <div className="card-body p-5 space-y-1">
            <div className="topbar w-full flex justify-between items-center">
              <div className="flex flex-col items-start">
                <h4 className="card-title">{hashtag}</h4>
                <div className="text-xs text-right text-gray-400 hover:text-gray-300">
                  <span className="font-bold">{trend.topic_tweet_count}</span>{" "}
                  tweets posted
                </div>
              </div>
              <div>
                {trend.topic &&
                  trend.topic.map((topic, idx) => {
                    return (
                      <>
                        &nbsp;
                        <span className="badge badge-outlined rounded-full text-white">
                          {topic}
                        </span>
                      </>
                    );
                  })}
              </div>

              <SentimentDiv trend={trend} />
            </div>
            <p className={`card-text w-full text-left min-h-[50px]
            ${trend.summary === "" ? "animate-pulse bg-[#343232] rounded" : ""}`}>{trend.summary}</p>

            <div className="endbar flex justify-end w-full">
              {/* <p className="text-xs text-left text-[#707070]">{trend.time_stamp}</p> */}
              <Breakpoint small down>
                <Collapse
                  RightComponent={RightComponent}
                  click={() => setReadTweets(index)}
                />
              </Breakpoint>
              <Breakpoint medium up>
                <a
                  className="link text-right"
                  onClick={() => {
                    setReadTweets(index);
                  }}
                >
                  Read Tweets
                </a>
              </Breakpoint>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}

TrendingCard.Dropdown = TrendingDropdown;
export default TrendingCard;
