import React from "react";
import Link from "next/link";

import { useRouter } from "next/router";

const CoffeeStore = () => {
  const router = useRouter();
  console.log(router.query.id);
  return (
    <div>
      CoffeeStore
      {router.query.id}
      <Link href="/">
        <a> Back to home page!</a>
      </Link>
      <Link href="/coffee-store/bhgh">
        <a> To the dynamic pages.</a>
      </Link>
    </div>
  );
};

export default CoffeeStore;
