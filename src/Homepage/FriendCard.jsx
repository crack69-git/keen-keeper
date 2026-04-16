import React, { Suspense, lazy } from 'react';

const CardSection = lazy(() => import('./CardSection'));

const FriendCard = () => {
  return (
    <div className="mt-10 ">
      <p className="text-2xl font-semibold mb-5">Your Friends</p>
      <Suspense
        fallback={<span className="loading loading-spinner loading-xl"></span>}
      >
        <CardSection />
      </Suspense>
    </div>
  );
};

export default FriendCard;
