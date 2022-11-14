import { React } from "react";
import "../../css/RightComponents/RightUser.css"
import { useState, useEffect } from "react";
import plus from "../../images/plus.svg"
import minus from "../../images/minus.svg"
import people from "../../images/people.svg"
import calendar from "../../images/calendar.svg"

export default function RightUser(props) {

    return (
        <>
            <div>
                <div className="h-auto w-full flex items-center border-gray-200  rounded-lg p-3 bg-zinc-800">
                    <div className="w-14 h-auto rounded-full bg-cover flex-none">
                        <img className="rounded-full w-[100%]" src={props.user.details["profile_image_url"]} />
                    </div>
                    <div className="ml-[5%]">
                        <h1 className="text-2xl font-bold">
                            {props.user.details['username']}
                        </h1>
                        <h1 className="text-sm">
                            {props.user.details['description']}
                        </h1>
                    </div>
                </div>
            </div>
            <div className="h-auto w-full checker-bg flex flex-col items-start border-gray-200 rounded-lg px-3 py-2 border mt-4 justify-around gap-2">
                <div className="w-full">
                    <div className="text-2xl">Statistics</div>
                </div>
                <div className="flex w-full">
                    <div className="flex">
                        <div className="icon flex-none w-10 h-10 p-2.5 bg-blue-400 text-white rounded-full mr-3">
                            <img src={people} alt="people" />
                        </div>
                        <div className="flex flex-col justify-center">
                            <div className="text-lg">{props.user.details['followers_count']}</div>
                            <div className="text-sm text-gray-400">Followers</div>
                        </div>
                    </div>
                    <div className="flex ml-[18%]">
                        <div className="icon flex-none w-10 h-10 p-2.5 bg-blue-400 text-white rounded-full mr-3">
                            <img src={calendar} alt="calendar" />
                        </div>
                        <div className="flex flex-col justify-center">
                            <div className="text-lg">{props.user.details['created_at']}</div>
                            <div className="text-sm text-gray-400">Since</div>
                        </div>
                    </div>
                </div>
                <div className="flex w-full justify-start">
                    <div className="flex">
                        <div className="icon flex-none w-10 h-10 p-2.5 bg-green-500 text-white rounded-full mr-3">
                            <img src={plus} alt="+" className="flex-none" />
                        </div>
                        <div className="flex flex-col justify-center">
                            <div className="text-lg">{props.user.details["pos_count"]}</div>
                            <div className="text-sm text-gray-400">Positive Tweets</div>
                        </div>
                    </div>
                    <div className="flex ml-[10%]">
                        <div className="icon flex-none w-10 h-10 p-2.5 bg-red-500 text-white rounded-full mr-3  ">
                            <img src={minus} alt="-" className="flex-none" />
                        </div>
                        <div className="flex flex-col justify-center">
                            <div className="text-lg">{props.user.details["neg_count"]}</div>
                            <div className="text-sm text-gray-400">Negative Tweets</div>
                        </div>
                    </div>
                </div>
            </div>
            {
                props.user.clouds === "" ?
                    null:
                    <div className="flex gap-2 justify-between mt-[6%] w-full">
                    <div className="container flex gap-2 flex-col gap-1 items-center">
                        <h1 className="text-lg">Things mentioned</h1>
                        <img src={`data:image/png;base64,${JSON.parse(props.user.clouds["cloud_nouns"])}`} alt="wordcloud" className="max-w-[80%] h-auto" />
                    </div>
                    <div className="container flex gap-2 flex-col gap-1 items-center">
                        <h1 className="text-lg">Names mentioned</h1>
                        <img src={`data:image/png;base64,${JSON.parse(props.user.clouds["cloud_names"])}`} alt="wordcloud" className="max-w-[80%] h-auto" />
                    </div>
                </div>
            }
        </>
    )
}