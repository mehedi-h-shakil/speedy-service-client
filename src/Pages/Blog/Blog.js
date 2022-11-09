import React from "react";

const Blog = () => {
  return (
    <div className="w-9/12 mx-auto">
      <div className="bg-slate-300 p-5 m-5">
        <h2 className="text-3xl font-semibold py-5">
          Difference between SQL and NoSQL
        </h2>
        <p>
          SQL is the programming language used to interface with relational
          databases. Relational databases model data as records in rows and
          tables with logical links between them. NoSQL is a class of DBMs that
          are non-relational and generally do not use SQL.
        </p>
      </div>
      <div className="bg-slate-300 p-5 m-5">
        <h2 className="text-3xl font-semibold py-5">
          What is JWT, and how does it work?
        </h2>
        <p>
          JWT, or JSON Web Token, is an open standard used to share security
          information between two parties — a client and a server. Each JWT
          contains encoded JSON objects, including a set of claims. JWTs are
          signed using a cryptographic algorithm to ensure that the claims
          cannot be altered after the token is issued.
          <br />
          <br />
          JWTs differ from other web tokens in that they contain a set of
          claims. Claims are used to transmit information between two parties.
          What these claims are depends on the use case at hand. For example, a
          claim may assert who issued the token, how long it is valid for, or
          what permissions the client has been granted.
        </p>
      </div>
      <div className="bg-slate-300 p-5 m-5">
        <h2 className="text-3xl font-semibold py-5">
          What is the difference between javascript and NodeJS?
        </h2>
        <p>
          JavaScript is a simple programming language that can be used with any
          browser that has the JavaScript Engine installed. Node. js, on the
          other hand, is an interpreter or execution environment for the
          JavaScript programming language.
        </p>
      </div>
      <div className="bg-slate-300 p-5 m-5">
        <h2 className="text-3xl font-semibold py-5">
          How does NodeJS handle multiple requests at the same time?
        </h2>
        <p>
          NodeJS receives multiple client requests and places them into
          EventQueue. NodeJS is built with the concept of event-driven
          architecture. NodeJS has its own EventLoop which is an infinite loop
          that receives requests and processes them.
        </p>
      </div>
    </div>
  );
};

export default Blog;
