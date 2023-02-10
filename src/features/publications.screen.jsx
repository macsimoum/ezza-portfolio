import * as React from "react";
import ISIJournalCardComponent from "../components/isi-journal-card.component";
import ISCJournalCardComponent from "../components/isc-journal-card.component";
import ConferenceCardComponent from "../components/conference-card.component";

const data = [
  {
    title: "ISI Journals",
    items: [
      {
        authors: [
          "Alireza Hassannejad",
          "Alireza Zakariazadeh",
          "Pierluigi Siano",
        ],
        firstPublish: "09 June 2020",
        journal: "International Transactions on Electrical Energy Systems",
        doi: "https://doi.org/10.1002/2050-7038.12469",
        url: "https://onlinelibrary.wiley.com/doi/abs/10.1002/2050-7038.12469",
        abstract:
          "Summary Optimal allocation of measurement devices is a necessity in order to carry out state estimation of a distribution system. In this paper, the placement problem of power measurement devices is modeled using a multi-objective method. The objectives of the problem are to minimize measurement devices' costs while increasing the accuracy of state estimation and improving the state estimation quality. Also, operational priorities are considered as another objective, which are based on power losses, lines' capacities, the number of lines connected to a specific line, and the change in lines' flows direction. A multi-objective evolutionary algorithm based on decomposition (MOEA/D) is used to optimize the allocation of measurement devices within the problem of distribution system state estimation. The state estimation problem is optimized by particle swarm optimization (PSO) algorithm and the Monte Carlo simulation is used to develop some conditions within the network to guarantee the robustness of the proposed method. The method is tested by simulation results on an IEEE 33-bus and IEEE 123-bus radial network.",
        volume: "30",
        issue: "8",
        pages: "e12469",
        year: "2020",
        keywords: [
          "allocation",
          "allocation quality",
          "distribution system state estimation",
          "measurement device",
          "multi-objective optimization",
        ],
        title:
          "Measurement devices allocation in the distribution system using state estimation: A multi‐objective approach",
      },
      {
        authors: [
          "Alireza Hassannejad",
          "Elahe Sahraie",
          "Alireza Zakariazadeh",
          "Mostafa Gholami",
        ],
        firstPublish: "01 September 2020",
        journal: "Electrical Engineering",
        doi: "https://doi.org/10.1007/s00202-020-00986-9",
        url: "https://link.springer.com/article/10.1007/s00202-020-00986-9",
        abstract:
          "In this paper, a new clearing method for the separate reactive power market aiming at improving the reactive power compensation quality is presented. To analyze the performance of the proposed clearing method, indices including profitability rates for power suppliers, participation rates of power suppliers and fair distribution of the revenue and net surpluses have been developed. Robustness and efficiency of the proposed clearing method are tested on the 24-bus IEEE RTS system, and the market problem is solved by a multi-objective evolutionary algorithm based on decomposition. The results evidence that the proposed clearing method improves the quality of reactive power compensation if compared with the available market clearing methods.",
        volume: "102",
        issue: "3",
        pages: "1667",
        year: "2020",
        keywords: [
          "Reactive power",
          "Market clearing",
          "Multi-objective optimization",
        ],
        title:
          "Reactive power market clearing mechanism considering new clearing constraints: a separate clearing approach",
      },
    ],
  },
  {
    title: "ISC Journal",
    items: [
      {
        authors: ["Alireza Hassannejad", "Alireza Zakariazadeh"],
        journal: "Iranian Journal of Electrical and Electronic Engineering",
        doi: "http://ijeee.iust.ac.ir/article-1-1482-en.pdf",
        url: "http://ijeee.iust.ac.ir/article-1-1482-en.pdf",
        volume: "16",
        firstPublish: "01 September 2020",
        number: "3",
        pages: "292-301",
        year: "2020",
        keywords: [
          "State Estimation",
          "Distribution Network",
          "Error Modeling",
          "ANN",
          "Radial Basis Function",
        ],
        abstract:
          "State estimation is essential to access observable network models for online monitoring and analyzing of power systems. Due to the integration of distributed energy resources and new technologies, state estimation in distribution systems would be necessary. However, accurate input data are essential for an accurate estimation along with knowledge on the possible correlation between the real and pseudo measurements data. This study presents a new approach to model errors for the distribution system state estimation purpose. In this paper, pseudo measurements are generated using a couple of real measurements data by means of the artificial neural network method. In the proposed method, the radial basis function network with the Gaussian kernel is also implemented to decompose pseudo measurements into several components. The robustness of the proposed error modeling method is assessed on IEEE 123-bus distribution test system where the problem is optimized by the imperialist competitive algorithm. The results evidence that the proposed method causes to increase in detachment accuracy of error components which results in presenting higher quality output in the distribution state estimation.",
        title:
          "Error modeling in distribution network state estimation using rbf-based artificial neural network",
      },
      {
        authors: ["Alireza Hassannejad", "Alireza Zakariazadeh"],
        journal:
          "Journal of Iranian Association of Electrical and Electronics Engineers",
        doi: "http://dorl.net/dor/20.1001.1.26765810.1398.16.1.10.5",
        url: "http://dorl.net/dor/20.1001.1.26765810.1398.16.1.10.5",
        volume: "16",
        firstPublish: "29 April 2019",
        number: "1",
        pages: "103-107",
        year: "2019",
        keywords: [
          "measurement allocation",
          "distribution system state estimation",
          "radial network",
          "multi-objective optimization",
        ],
        abstract:
          "Allocation of measurement devices is a necessity of distribution system which is an application of state estimation. In this paper, the problem of active and reactive measurement devices is modeling using a multi-objective method. The objectives of the problem are to minimize the use of measurement devices, increase in state estimation output, improve the state estimation quality and reduce costs. The costs are calculated based on line loss, line capacity, lines connected to the specific line and the change in line flow direction. The Multi-Objective Evolutionary Algorithm based on Decomposition (MOEA/D) is used to optimize the measurement devices allocation within the problem of distribution system state estimation. The simulation and optimization is tested on IEEE 33-busand IEEE 123-bus radial networks and state estimation problem is optimized by particle swarm optimization (PSO) algorithm. The Monte Carlo simulation is used to develop some conditions for network to guarantee the robustness of the proposed method.",
        title:
          "Multi-objective Measurement Devices Allocation Using State Estimation in Distribution System",
      },
    ],
  },
  {
    title: "Conferences",
    items: [
      {
        authors: [
          "Alireza Hassannejad",
          "Elahe Sahraie",
          "Alireza Zakariazadeh",
        ],
        journal:
          "33rd international power system conference (PSC), Iran – Tehran",
        url: "https://www.researchgate.net/publication/340225601_Prediction_Of_Market_Power_Competitive_Levels_Variation_And_Players_Collusion_Form_By_Decision_Tree",
        firstPublish: "10 October 2018",
        year: "2018",
        abstract:
          "The evolution of dependency between the market power levels measurement indices, allows that operator to have accurate prediction of the measurement indices values by the several market power competitive levels measurement indices. This prediction provides controlling the market competitive levels basis with preventive actions and preventive controls. Whist, the market power owners can be recognizable by analyzing different aspects of market power. This market power owners recognizing, simples the supervision of their non-competitive behaviors and allows that operator to predict the type of probable collation between market power owners’. In this paper, the dependency between the market power levels measurement indices is analyzed by assessing the relation between set of market power competitive levels measurement indices values using decision tree. These values of market competitive levels are achieved by market simulation in 24-bus IEEE RTS. The market clearing is optimized by multi-objective evolutionary algorithm based on decomposition (MOEAD).",
        title:
          "Prediction Of Market Power Competitive Levels Variation And Players Collusion Form By Decision Tree",
      },
      {
        authors: ["Alireza Hassannejad", "Alireza, Alireza Zakariazadeh"],
        journal:
          "33rd international power system conference (PSC), Iran – Tehran",
        url: "https://www.researchgate.net/publication/338792675_New_Reactive_Power_Market_Clearing_Scheme_With_Controlling_The_Market_Competitive_Level",
        firstPublish: "10 October 2020",
        year: "2018",
        abstract:
          "Improvement of the separate reactive power market (SRPM) clearing performance is necessary due to increase the participation of units along with maintaining voltage profile of the network, providing reliable and high quality ancillary services and freeing up the transmission lines capacity. Quality of a power market clearing method could measure not only by the values of the market final costs but also by market participations rates, market profitability rates and fair distributing profits. In this paper, a new power market clearing method is presented to clear separate active and reactive power market which is founded on effectiveness of the market clearing strategy regarding to market input parameters changes. The Proposed clearing method aims at improving the control on more specific terms of market clearing including market total costs, market profitability, market competitive level, market share and dependency level of market clearing strategy to market input parameters. Robustness of the proposed market clearing method is tested on 24-bus IEEE RTS for SRPM clearing and the market problem is solved by genetic algorithm. The results proof that the proposed clearing method improves the quality of market clearing performance if compared with other usual market clearing schemes.",
        title:
          "New Reactive Power Market Clearing Scheme With Controlling The Market Competitive Level",
      },
    ],
  },
];

const PublicationsScreen = () => {
  const [editing, setEditing] = React.useState(new Set());

  const handleExpand = (id) => {
    setEditing((editing) => {
      // Copy the set
      editing = new Set(editing);
      if (editing.has(id)) {
        // Already editing, stop editing
        editing.delete(id);
      } else {
        // Not editing, start
        editing.add(id);
      }
      return editing;
    });
  };

  function handleOpenWebsite(url) {
    window.open(url, "_blank", "noreferrer");
  }

  return (
    <div>
      {data.map((type, index1) => (
        <div key={type.title + type.items[0].authors[0]}>
          {type.title === "ISI Journals"
            ? type.items.map((article, index2) => (
                <ISIJournalCardComponent
                  key={article.title}
                  info={article}
                  expanded={editing.has(12 + index1 + index2)}
                  handleExpandClick={() => handleExpand(12 + index1 + index2)}
                  handleOpenWebsite={handleOpenWebsite}
                  title={type.title}
                />
              ))
            : type.title === "ISC Journal"
            ? type.items.map((article, index2) => (
                <ISCJournalCardComponent
                  key={article.title}
                  info={article}
                  expanded={editing.has(22 + index1 + index2)}
                  handleExpandClick={() => handleExpand(22 + index1 + index2)}
                  handleOpenWebsite={handleOpenWebsite}
                  title={type.title}
                />
              ))
            : type.items.map((article, index2) => (
                <ConferenceCardComponent
                  key={article.title}
                  info={article}
                  expanded={editing.has(33 + index1 + index2)}
                  handleExpandClick={() => handleExpand(33 + index1 + index2)}
                  handleOpenWebsite={handleOpenWebsite}
                  title={type.title}
                />
              ))}
        </div>
      ))}
    </div>
  );
};

export default PublicationsScreen;
