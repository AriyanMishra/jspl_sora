import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartColumn } from '@fortawesome/free-solid-svg-icons';

export const menuItems = [
    {
      id: 1,
      title: "Dashboard",
      name: "",
      icon: <FontAwesomeIcon icon={faChartColumn} className="icon" />,
      submenu: [] // Add submenu items here
    },
    {
      id: 2,
      title: "Safety Observation(PIOs)/ Audits",
      name: "safetyonservation(pios)/audit",
      icon: <FontAwesomeIcon icon={faChartColumn} className="icon" />,
      submenu: [
        {
          id: 3,
          title: "Safety Observation (PIOs)",
          name: "safetyObservation",
          icon: <FontAwesomeIcon icon={faChartColumn} className="icon" />,
        },
        {
          id: 4,
          title: "Line Walk (Individual Audit)",
          name: "submenu2",
          icon: <FontAwesomeIcon icon={faChartColumn} className="icon" />,
        },
      ]
    },
  ];
  