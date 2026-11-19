import './citations.css';

/** 
 * A simple list of sources at the end of the generated content can be the right approach when you want to minimize interruption of the content. This is also a very familiar pattern, especially for users who regularly work with academic or research materials; if your application is meant to support those functions, this pattern will match well with user expectations.
 **/


export const CitationList = () => {
  return (
    <section className="citation-list-example">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua.<sup><a href="#source-one" aria-label="Go to reference 1">[1]</a></sup>{' '}
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.<sup><a href="#source-two" aria-label="Go to reference 2">[2]</a></sup>{' '}
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur.<sup><a href="#source-three" aria-label="Go to reference 3">[3]</a></sup>
      </p>
      <h3>References</h3>
      <ol>
        <li id="source-one">
          <a href="#source-one">Source Title One</a>: "...<i>tempor incididunt ut labore</i> duis volupatate ese..."
        </li>
        <li id="source-two">
          <a href="#source-two">Source Title Two</a>: "<i>Ut enim ed minim veniam</i> voluptate ipsum dolor sit amet..."
        </li>
        <li id="source-three">
          <a href="#source-three">Source Title Three</a>: "...quix nostrud <i>essse cillum dolore</i>..."
        </li>
      </ol>
    </section>
  );
};
