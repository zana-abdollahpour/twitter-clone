/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
import { getProviders, signIn } from "next-auth/react";

import twitterMobile from "../../public/images/twitter-mobile.png";
import twitterLogo from "../../public/images/twitter-logo.png";

export default function signin({ providers }) {
  return (
    <div className="flex justify-center mt-20 space-x-4">
      <Image
        className="hidden object-cover md:inline-flex rotate-6 md:w-44 md:h-80"
        src={twitterMobile}
        alt="twitter app running on mobile"
      />
      <div className="">
        {Object.values(providers).map((provider) => (
          <div key={provider.name} className="flex flex-col items-center">
            <Image
              className="object-cover w-36"
              src={twitterLogo}
              alt="twitter logo"
            />
            <p className="my-10 text-sm italic text-center ">
              This app is created for learning purposes
            </p>
            <button
              className="p-3 text-white bg-red-400 rounded-lg hover:bg-red-500"
              onClick={() => signIn(provider.id, { callbackUrl: "/" })}
            >
              Sign in with {provider.name}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: {
      providers,
    },
  };
}
