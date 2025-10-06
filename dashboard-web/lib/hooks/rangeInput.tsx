"use client";
import DefaultButton from "@/components/Shared/Button/DefaultButton";
import Link from "next/link";
import { Component, ChangeEvent } from "react";
import React from "react";
import { RiCheckLine, RiErrorWarningFill } from "react-icons/ri";
// import Tooltip from "@/components/Shared/Tooltip";

interface RangeSliderState {
  value: number;
}

class RangeSlider extends Component<{}, RangeSliderState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      value: 100,
    };
  }

  handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({ value: +event.target.value });
  };

  features = [
    {
      text: "Leads billed based on utilization",
      popover: "",
    },
    {
      text: "AI collected signals billed based on utilization",
      popover:
        "Signals collected means a column of data created and populated on Reframe",
    },
    {
      text: "3 team members",
    },
    {
      text: "Up to 3 lead scoring criteria",
      popover: "Lead scoring criteria are derivative columns used as filters",
    },
  ];

  render() {
    const min = 0;
    const max = 1000;
    const step = 100;
    const minPos = ((this.state.value - min) / (max - min)) * 100;
    // Calculate the percentage value for styling
    const percentage = ((this.state.value - min) / (max - min)) * 100;

    // Define the inline style for the background
    const backgroundStyle = {
      background: `linear-gradient(to right, #333 0%, #333 ${percentage}%, #eee ${percentage}%, #eee 100%)`,
    };

    return (
      <div className={`flex flex-col px-5 py-8 gap-8 rounded-md border`}>
        <div className="flex flex-col gap-4">
          <div className="text-sm text-neutral-400 uppercase font-medium">
            Pay as you go
          </div>
          <div className="w-full">
            <div className="flex font-bold gap-2 items-end">
              <span className="text-4xl tracking-tight">{`$${this.state.value * 0.1}`}</span>
              <span className="text-sm mb-4">
                / {this.state.value} executions
              </span>
            </div>
            <div className="mt-3 text-neutral-600 h-12">
              Perfect for solo entrepreneurs. Only pay for what you use
            </div>
          </div>
        </div>
        <Link
          href="../auth/signup"
          className="w-full"
          rel="noopener noreferrer"
        >
          <DefaultButton
            label="Continue"
            variant="default"
            styleClass={`!font-semibold !py-2.5 w-full !light:border-black`}
          />
        </Link>
        <div className="flex flex-col pt-5 pb-4 gap-4 border-t">
          {/* <RangeSlider/> */}
          <div className="w-full mb-1">
            <div className="text-sm text-neutral-500 font-medium">
              $0.10 per execution unit
            </div>
            <div className="w-full mt-1 flex items-center gap-3">
              <div className="text-sm text-neutral-600">100</div>
              <div className="input-wrapper w-full">
                <input
                  className="range-input w-full h-2 bg-black"
                  type="range"
                  value={this.state.value}
                  min={min}
                  max={max}
                  step={step}
                  style={backgroundStyle}
                  onChange={this.handleChange}
                />
              </div>
              <div className="text-sm text-neutral-600">{max}</div>
            </div>
          </div>

          {this.features.map((item) => (
            <div className="flex items-start justify-between">
              <div className="flex items-start">
                <RiCheckLine size={20} className="mt-1 text-green-600" />
                <div className="w-11/12 ml-2 text-neutral-600">{item.text}</div>
              </div>
              {/* {item.popover ? <div className="w-5"><Tooltip message={item.popover}> <RiErrorWarningFill className="mt-1 text-neutral-300" size={18}/></Tooltip></div> : ''} */}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default RangeSlider;
