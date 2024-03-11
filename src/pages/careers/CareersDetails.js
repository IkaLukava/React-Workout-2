import React from "react";
import { useLoaderData, useParams } from "react-router-dom";

export default function CareersDetails() {
  const { id } = useParams();
  const career = useLoaderData;
  return (
    <div className="career-details">
      <h2>Career Details for {career.title}</h2>
      <p>Starging salary: {career.salary}</p>
      <p>Location: {career.location}</p>
      <div className="details">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non
          ligula malesuada turpis tincidunt commodo. Integer felis ligula,
          volutpat vel cursus at, vestibulum lobortis libero. Vivamus in
          ultricies arcu. Pellentesque id elit metus. Etiam at porta lectus. Sed
          sed magna luctus, egestas odio nec, cursus nulla. Praesent eros lorem,
          euismod nec sapien a, aliquet varius metus. Ut vitae justo ultricies,
          mollis nulla in, blandit sapien. Cras pharetra consequat orci id
          pretium. Cras pulvinar ullamcorper aliquet. Cras ligula sem, sodales
          nec scelerisque dapibus, aliquet ut mauris.
        </p>
      </div>
    </div>
  );
}

// loader function
export const careersDetailsLoader = async ({ params }) => {
  const { id } = params;

  const res = await fetch("http://localhost:4000/careers/" + id);

  if (!res.ok) {
    throw Error("ამფერი არაფერი მინახავს");
  }

  return res.json();
};
