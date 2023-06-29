import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';

export const SidebarData = [
  {
    title: 'Dashboard',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  },
  {
    title: 'Safety Observation (PIOs) / Audits',
    path: '',
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Safety Observation (PIOs)',
        path: '/Safety',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav',
      },
      {
        title: 'Line Walk (Individual Audit)',
        path: '/Line',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav',
      },
      {
        title: 'Cross Functional Team Audit',
        path: '/cross-functional-audit',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav',
      },
      {
        title: 'Group Safety Audit',
        path: '/group-safety-audit',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav',
      },
      {
        title: 'FRCP Proactive',
        path: '/frcp-proactive',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav',
      },
      {
        title: 'Internal Audit',
        path: '/internal-audit',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav',
      },
      {
        title: 'External Audit',
        path: '/external-audit',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav',
      },
    ],
  },
  {
    title: 'Action To Be Taken',
    path: '/action-taken',
    icon: <IoIcons.IoIosPaper />,
  },
  {
    title: 'My Raised Observation',
    path: '/Raised',
    icon: <IoIcons.IoIosPaper />,
  },
  {
    title: 'Admin',
    path: '',
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Line Manager Master',
        path: '/Manager',
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
  {
    title: 'Help',
    path: '',
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'User Manual',
        path: '/user-manual',
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
];
