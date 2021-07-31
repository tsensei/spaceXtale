import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { DataContext } from "../providers/DataContext";
import ImageSlider from "./ImageSlider";
import unixToLocal from "../utils/unixtolocal";
import styles from "../styles/Rocket.module.css";

const Rocket = () => {
  const { rockets } = useContext(DataContext);
  const { id } = useParams();
  const [data] = useState(rockets.find((r) => r.id === id));
  console.log(data);

  return (
    <div className="container">
      <div className={styles.rocket__description}>
        <p>{data.name}</p>
        <p>
          <span>Status : </span>

          <span className={data.active ? styles.active : styles.inactive}>
            {data.active ? "Active" : "Inactive"}
          </span>
        </p>
        <p>
          <span>First Flight : </span>
          {unixToLocal(data.first_flight, 1, 1)}
        </p>
        <p>
          <span>Cost Per Launch : </span>
          {data.cost_per_launch / 1000000}M USD
        </p>
        <p>
          <span>Success Rate : </span>
          {data.success_rate_pct}%
        </p>
        <p>{data.description}</p>
      </div>

      <div className={styles.rocket__data__tables}>
        <OverviewTable data={data} />
        <EngineTable data={data.engines} />
        <FirstStageTable data={data.first_stage} />
        <SecondStageTable data={data.second_stage} />
        <PayloadsTable data={data.payload_weights} />
      </div>
      <ImageSlider srcArr={data.flickr_images} />
    </div>
  );
};

const TableRow = ({ title, content }) => {
  if (!content) return null;
  if (typeof content === "string" && content.includes("null")) return null;
  return (
    <div className="bb__table__row">
      <p>{title}</p>
      <p>{content}</p>
    </div>
  );
};

const OverviewTable = ({ data }) => (
  <div className="bb__table">
    <p className="bb__table__header">Overview</p>
    <TableRow
      title="Height"
      content={`${data.height.meters} meters | ${data.height.feet} feet`}
    />
    <TableRow
      title="Diameter"
      content={`${data.diameter.meters} meters | ${data.diameter.feet} feet`}
    />
    <TableRow title="Boosters" content={data.boosters} />
    <TableRow title="Stages" content={data.stages} />
    <TableRow
      title="Landing Legs"
      content={`${data.landing_legs.number} | ${data.landing_legs.material}`}
    />
  </div>
);

const EngineTable = ({ data }) => (
  <div className="bb__table">
    <p className="bb__table__header">Engines</p>
    <TableRow title="Type" content={data.type?.toUpperCase()} />
    <TableRow title="Amount" content={data.number} />
    <TableRow title="Version" content={data.version} />
    <TableRow title="Layout" content={data.layout?.toUpperCase()} />
    <TableRow title="Max Engine Loss" content={data.engine_loss_max || ""} />
    <TableRow title="Propellant 1" content={data.propellant_1} />
    <TableRow title="Propellant 2" content={data.propellant_2} />
    <TableRow
      title="Specific Impulse"
      content={`${data.isp.sea_level} (sea) | ${data.isp.vacuum} (vacuum)`}
    />
    <TableRow title="Thrust to Weight Ratio" content={data.thrust_to_weight} />
    <TableRow
      title="Sea Level Thrust"
      content={`${data.thrust_sea_level.kN} kN | ${data.thrust_sea_level.lbf} lbf`}
    />
    <TableRow
      title="Vacuum Thrust"
      content={`${data.thrust_vacuum.kN} kN | ${data.thrust_vacuum.lbf} lbf`}
    />
  </div>
);

const FirstStageTable = ({ data }) => (
  <div className="bb__table">
    <p className="bb__table__header">First Stage</p>
    <TableRow title="Engines" content={data.engines} />
    <TableRow title="Burn Time" content={`${data.burn_time_sec} sec`} />
    <TableRow title="Fuel Amount" content={`${data.fuel_amount_tons} ton`} />
    <TableRow title="Reusable" content={data.reusable ? "YES" : "NO"} />
    <TableRow
      title="Sea Level Thrust"
      content={`${data.thrust_sea_level.kN} kN | ${data.thrust_sea_level.lbf} lbf`}
    />
    <TableRow
      title="Vacuum Thrust"
      content={`${data.thrust_vacuum.kN} kN | ${data.thrust_vacuum.lbf} lbf`}
    />
  </div>
);

const SecondStageTable = ({ data }) => (
  <div className="bb__table">
    <p className="bb__table__header">Second Stage</p>
    <TableRow title="Engines" content={data.engines} />
    <TableRow title="Burn Time" content={`${data.burn_time_sec} sec`} />
    <TableRow title="Fuel Amount" content={`${data.fuel_amount_tons} ton`} />
    <TableRow title="Reusable" content={data.reusable ? "YES" : "NO"} />
    <TableRow
      title="Thrust"
      content={`${data.thrust.kN} kN | ${data.thrust.lbf} lbf`}
    />
    <TableRow
      title="Fairing Type"
      content={data.payloads.option_1.toUpperCase()}
    />
    <TableRow
      title="Fairing Height"
      content={`${data.payloads.composite_fairing.height.meters} meters | ${data.payloads.composite_fairing.height.feet} feet`}
    />
    <TableRow
      title="Fairing Diameter"
      content={`${data.payloads.composite_fairing.diameter.meters} meters | ${data.payloads.composite_fairing.diameter.feet} feet`}
    />
  </div>
);

const PayloadsTable = ({ data }) => (
  <div className="bb__table">
    <p className="bb__table__header">Payloads</p>
    {data.map((d) => (
      <TableRow key={d.id} title={d.name} content={`${d.kg} kg | ${d.lb} lb`} />
    ))}
  </div>
);

export default Rocket;
