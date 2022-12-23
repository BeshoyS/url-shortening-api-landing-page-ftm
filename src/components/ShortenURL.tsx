import { FC } from "react";
import Button from "./Button";

type Props = {};

const ShortenURL: FC = (props: Props) => {
  return (
    <section className="shorten">
      <div className="shorten__wrapper">
        <form className="shorten__form">
          <div>
            <input
              className="shorten__inp"
              type="text"
              placeholder="Shorten a link here..."
            />
            <p className="err-msg">Please add a link</p>
          </div>
          <Button title="Shorten It!" styles="shorten__btn rounded-sm w-100" />
        </form>
        <section className="shorten__list">
          <div className="shorten__item">
            <p className="shorten__original">
              Lorem ipsum dolor sit amet consectetur.
            </p>
            <div className="shorten__output">
              <a className="shorten__oplink" href="#">
                Lorem ipsum dolor sit.
              </a>
              <Button title="Copy" styles="rounded-sm w-100 shorten__copybtn" />
            </div>
          </div>
          <div className="shorten__item">
            <p className="shorten__original">
              Lorem ipsum dolor sit amet consectetur.
            </p>
            <div className="shorten__output">
              <a className="shorten__oplink" href="#">
                Lorem ipsum dolor sit.
              </a>
              <Button title="Copy" styles="rounded-sm w-100 shorten__copybtn" />
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default ShortenURL;
