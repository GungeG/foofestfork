"use client";


import Link from "next/link";
import Dropdown from "./Dropdown";

const ArtistCard = () => {
  return (
    <div className="navbar bg-transparent sticky top-0 z-20">
      <form>
      <button type="button" onClick={() => history.back()} aria-label="Go back">
          <img className="w-8" src="/images/arrow-left.svg" alt="Go back" />
        </button>
      </form>
      <Dropdown />
      <div className="navbar-center text-center ml-[-30px]">
        <Link href="/">
          <img src="/images/devil.svg" alt="" />
        </Link>
      </div>
      <div className="navbar-end">
        <Link href="/tickets">
          <button className="btn btn-ghost" aria-label="Tickets">
            <img
              className="max-w-[30px] max-h-[30px] mr-2"
              src="/images/ticket.svg"
              alt=""
            />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ArtistCard;
