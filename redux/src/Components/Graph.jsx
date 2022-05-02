import React, { useEffect, useState } from "react";
import * as d3 from "d3";

const nodes = [
  { id: "청소년", value: 6, group: "media" },
  { id: "하하하", value: 2, group: "media" },
  { id: "안녕하세요", value: 9, group: "media" },
  { id: "헤헤", value: 7, group: "media" },
];
const links = [
  { source: "청소년", target: "하하하", value: 2 },
  { source: "안녕하세요", target: "청소년", value: 5 },
  { source: "안녕하세요", target: "하하하", value: 12 },
  { source: "헤헤", target: "하하하", value: 1 },
  { source: "헤헤", target: "청소년", value: 7 },
];

const Graph = () => {
  useEffect(() => {
    // const nodes = _nodes.map((d) => {
    //   return Object.create(d);
    // });
    // const links = _links.map((d) => {
    //   return Object.create(d);
    // });

    const width = 500;
    const height = 500;
    const svg = d3
      .select("#network-svg")
      .attr("viewBox", [0, 0, width, height]);
    const gHolder = svg.append("g").attr("class", "g-holder");

    const simulation = d3
      .forceSimulation(nodes)
      .force(
        "link",
        d3.forceLink(links).id(function (d) {
          return d.id;
        })
      )
      .force("charge", d3.forceManyBody().strength(300))
      .force("center", d3.forceCenter(width / 2, height / 2))
      .force(
        "collide",
        d3.forceCollide().radius(function (d) {
          return d.value * 20;
        })
      );

    const fillCircle = function (g) {
      if (g == "bad") {
        return "#ff3c00";
      } else if (g == "act") {
        return "#386cff";
      } else if (g == "media") {
        return "#6fbc5b";
      } else {
        return "#555";
      }
    };

    const link = gHolder
      .append("g")
      .attr("stroke", "#999")
      .attr("stroke-opacity", 0.6)
      .selectAll("line")
      .data(links)
      .join("line")
      .attr("stroke-width", function (d) {
        return Math.sqrt(d.value * 5);
      });

    const node = gHolder
      .append("g")
      .attr("class", "circle-node-holder")
      .selectAll("g")
      .data(nodes)
      .enter()
      .append("g")
      .each(function (d) {
        d3.select(this)
          .append("circle")
          .attr("r", d.value * 4)
          .attr("fill", fillCircle(d.group));
        d3.select(this)
          .append("text")
          .text(d.id)
          .attr("dy", 6)
          .style("text-anchor", "middle")
          .attr("class", "node-label");
      })
      .call(d3.drag(simulation));

    simulation.on("tick", function () {
      link
        .attr("x1", function (d) {
          return d.source.x;
        })
        .attr("y1", function (d) {
          return d.source.y;
        })
        .attr("x2", function (d) {
          return d.target.x;
        })
        .attr("y2", function (d) {
          return d.target.y;
        });
      node.attr("transform", function (d) {
        return "translate(" + d.x + "," + d.y + ")";
      });
    });
  }, []);

  return (
    <>
      <div className="network-graph">
        <svg id="network-svg" />
      </div>
    </>
  );
};

export default Graph;
