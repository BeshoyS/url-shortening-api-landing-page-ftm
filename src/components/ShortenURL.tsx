import axios from "axios";
import { FC, FormEvent, useState, useEffect, SyntheticEvent } from "react";
import Button from "./Button";

interface shortenListTypes {
  code: string;
  fullOriginalLink: string;
  shortLink: string;
}

const ShortenURL: FC = () => {
  const [inp, setInp] = useState<string>("");
  const [originalLink, setOriginalLink] = useState<string | undefined>("");
  const [shortenList, setShortenList] = useState<shortenListTypes[]>([]);
  const [err, setErr] = useState<boolean>(false);
  const [isCopied, setIsCopied] = useState<boolean>(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErr(false);
    if (!!inp) {
      setOriginalLink(inp);
      setInp("");
    } else {
      setErr(true);
    }
  }

  async function copyLink(e: SyntheticEvent, code: string, shortLink: string) {
    if (e.currentTarget.id.includes(code)) {
      await navigator.clipboard
        .writeText(shortLink)
        .then(() => {
          setIsCopied(true);
        })
        .then(() => {
          setTimeout(() => {
            setIsCopied(false);
          }, 2000);
        });
    }
  }

  useEffect(() => {
    if (originalLink) {
      axios
        .post(`https://api.shrtco.de/v2/shorten?url=${originalLink}`)
        .then(function ({ data }) {
          setShortenList((prev) => [
            ...prev,
            {
              code: data.result.code,
              fullOriginalLink: data.result.original_link,
              shortLink: data.result.full_short_link,
            },
          ]);
        })
        .catch(function ({ response }) {
          console.log(response.data.error);
          setErr(true);
        });
    }
  }, [originalLink]);

  return (
    <section className="shorten">
      <div className="shorten__wrapper">
        <form onSubmit={onSubmit} className="shorten__form">
          <div>
            <input
              onChange={(e) => setInp(e.target.value)}
              value={inp}
              onFocus={() => setErr(false)}
              className={`shorten__inp ${err ? "error" : ""}`}
              type="text"
              placeholder="Shorten a link here..."
            />
            {err && <p className="err-msg">Please add a link</p>}
          </div>
          <Button
            type="submit"
            title="Shorten It!"
            styles="shorten__btn rounded-sm w-100"
          />
        </form>
        <section className="shorten__list">
          {shortenList?.map(({ code, fullOriginalLink, shortLink }, idx) => (
            <div className="shorten__item" key={code + Math.random()}>
              <p className="shorten__original">{fullOriginalLink}</p>
              <div className="shorten__output">
                <a
                  className="shorten__oplink"
                  href={shortLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {shortLink}
                </a>
                <Button
                  unique={code + idx}
                  title={isCopied ? "Copied!" : "Copy"}
                  styles={`rounded-sm w-100 shorten__copybtn ${
                    isCopied ? "copied" : ""
                  }`}
                  onClick={(e) => copyLink(e, code, shortLink)}
                />
              </div>
            </div>
          ))}
        </section>
      </div>
    </section>
  );
};

export default ShortenURL;
