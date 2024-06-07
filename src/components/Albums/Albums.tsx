import {useEffect, useState} from "react";
import axios from "axios";
import {useQuery} from "@tanstack/react-query";
import {album} from "../../../index";
import {useGetAlbumsQuery} from "@/library/graphql";


export default function Albums() {
    const {data, loading} = useGetAlbumsQuery()
    if (loading) return loading

    return (
        <div>{data?.albums?.data?.map(album =>
            <div key={album?.id}
                 className="text-lg md:text-xl lg:text-2xl flex justify-center items-center m-5 border-double border-black border-4 w-[50%] h-[45%]">
                <br/>
                <div className=" flex flex-col justify-center items-center">
                    <p>ID: {album?.id} </p>
                    <p> Title: {album?.title} </p>
                    <p> Name: {album?.user?.name} </p>
                </div>
                <br/>
            </div>)}
        </div>
    )
}