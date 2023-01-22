import Prism from "prismjs";
import { useEffect, useState } from "react";

export default function CodeBoard(prop) {
  let [generatedHtml, setGeneratedHtml] = useState("");
  useEffect(() => {
    setGeneratedHtml(
      Prism.highlight(prop.code || "", Prism.languages.javascript, "javascript")
    );
  }, []);

  return (
    <pre
      style={{
        width: "100%",
        margin: "10px auto",
        borderRadius: "10px",
      }}
      className="language-javascript"
      dangerouslySetInnerHTML={{ __html: generatedHtml }}
    ></pre>
  );
}
