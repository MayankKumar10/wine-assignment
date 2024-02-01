import React from 'react';
import { calculateMean, calculateMedian, calculateMode, calculateGamma } from '../utils/statisticsUtils';
import './WineStatisticsTable.css';

function WineStatisticsTable({ data, property }) {
  const classes = Array.from(
    new Set(
      data.filter((item) => item.Wine !== undefined).map((item) => item.Wine)
    )
  );

  const calculatePropertyValue = (item) => {
    if (property === "Gamma") {
      return calculateGamma(item);
    } else {
      return item[property];
    }
  };

  const calculateClassStatistics = (className) => {
    const classValues = data
      .filter((item) => item.Wine === className)
      .map((item) => calculatePropertyValue(item))
      .flat();

    return {
      mean:
        typeof calculateMean(classValues) === "number"
          ? calculateMean(classValues).toFixed(3)
          : "N/A",
      median:
        typeof calculateMedian(classValues) === "number"
          ? calculateMedian(classValues).toFixed(3)
          : "N/A",
      mode:
        typeof calculateMode(classValues) === "number"
          ? calculateMode(classValues).toFixed(3)
          : "N/A",
    };
  };

  return (
    <div className="wine-table-container">
      <h2>{`${property} Table`}</h2>
      <table className="wine-table">
        <thead>
          <tr>
            <th>Measures</th>
            {classes.map((className) => (
              <th key={className}>Class {className}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{property} Mean</td>
            {classes.map((className) => (
              <td key={className}>
                {calculateClassStatistics(className)?.mean}
              </td>
            ))}
          </tr>
          <tr>
            <td>{property} Median</td>
            {classes.map((className) => (
              <td key={className}>
                {calculateClassStatistics(className)?.median}
              </td>
            ))}
          </tr>
          <tr>
            <td>{property} Mode</td>
            {classes.map((className) => (
              <td key={className}>
                {calculateClassStatistics(className)?.mode}
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default WineStatisticsTable;
