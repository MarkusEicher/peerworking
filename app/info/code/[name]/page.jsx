import { Suspense } from "react";
import Info from "@/app/components/info";
import Link from "next/link";
import InfoDetails from "@/app/components/infoDetails";

const InfoPage = ( {params : { name }} ) => {
  return (
    <div className="card">
        <Link href="/info/code" className="btn btn-back">Back to GitHub</Link>
        <Suspense fallback={<div>Loading...</div>}>
        <Info name={name}/>
        </Suspense>
        <Suspense fallback={<div>Loading directories...</div>}>
        <InfoDetails name={name}/>
        </Suspense>
    </div>
  );
};

export default InfoPage;