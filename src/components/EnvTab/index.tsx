import React, { useState } from 'react';
import { Tabs, TabsContainer, TabsContent, TabsButton, UrlContent, EwContent } from "./styles";
import { ReleaseProps, ReleaseJsonDTO } from "../ContentBlock/types";
import CloudNavigationPageContent from "../../content/CloudNavigationPageContent.json";
import OldAppsNavigationPageContent from "../../content/OldAppsNavigationPageContent.json";
import * as Constants from "../../common/contants";
import { Button } from "../../common/Button";

const EnvTab = ({
  release, tabtype }: ReleaseProps) => {

  const handleTabClick = (e: React.ChangeEvent<any>) => {
    setCurrentTab(e.target.id);
  }

  const parseNavJson = (releaseInput: string, parentIndex: number, title: string): ReleaseJsonDTO => {
    var modal = {} as ReleaseJsonDTO;
    modal.enable = false;
    modal.tasUrl = "";
    modal.systemId = "";
    if (releaseInput === Constants.RELASEAPPS10RND || releaseInput === Constants.RELASEAPPS10OTHER || releaseInput === Constants.RELASEAPPS9RND || releaseInput === Constants.RELASEAPPS9OTHER) {
      modal = parseOldNavJson(releaseInput, getIndex(releaseInput), title);
    }
    else {
      for (const release of CloudNavigationPageContent.parent[parentIndex].section) {
        if (CloudNavigationPageContent.parent[parentIndex].release === releaseInput && release.envtitle === title) {
          modal.enable = release.enable
          modal.ew = release.ew;
          modal.url = release.url;
          modal.envtitle = release.envtitle;
        }
      }
    }
    return modal;
  }

  const parseOldNavJson = (releaseInput: string, parentIndex: number, title: string): ReleaseJsonDTO => {
    var modal = {} as ReleaseJsonDTO;
    modal.enable = false;
    modal.tasUrl = "";
    modal.systemId = "";
    for (const release of OldAppsNavigationPageContent.parent[parentIndex].section) {
      if (OldAppsNavigationPageContent.parent[parentIndex].release === releaseInput && release.envtitle === title) {
        modal.enable = release.enable
        modal.ew = release.ew;
        modal.url = release.url;
        modal.tasUrl = release.tasurl;
        modal.systemId = release.systemid;
        modal.envtitle = release.envtitle;
      }
    }
    return modal;
  }

  const getIndex = (release: string): number => {
    if (Constants.RELASE24R1 === release) {
      return 0;
    }
    if (Constants.RELASE23R2 === release) {
      return 1;
    }
    if (Constants.RELASE23R1 === release) {
      return 2;
    }
    if (Constants.RELASE22R2 === release) {
      return 3;
    }
    if (Constants.RELASE22R1 === release) {
      return 4;
    }
    if (Constants.RELASE21R2 === release) {
      return 5;
    }
    if (Constants.RELASE21R1 === release) {
      return 6;
    }
    if (Constants.RELASEAPPS10RND === release) {
      return 0;
    }
    if (Constants.RELASEAPPS10OTHER === release) {
      return 1;
    }
    if (Constants.RELASEAPPS9RND === release) {
      return 2;
    }
    if (Constants.RELASEAPPS9OTHER === release) {
      return 3;
    }
    return 0;
  }

  const getLandingPage = (release: string, title: string): string => {
    return parseNavJson(release, getIndex(release), title).url;
  }


  const getEwPage = (release: string, title: string): string => {
    return parseNavJson(release, getIndex(release), title).ew;
  }

  const getTasUrl = (release: string, title: string): string => {
    return parseNavJson(release, getIndex(release), title).tasUrl;
  }

  const getSystemId = (release: string, title: string): string => {
    return parseNavJson(release, getIndex(release), title).systemId;
  }

  const isEnabled = (release: string, title: string): boolean => {
    return parseNavJson(release, getIndex(release), title).enable;
  }


  const [currentTab, setCurrentTab] = useState('1');
  const tabs = [
    {
      id: '1',
      tabTitle: release + ' DEV CMB',
      landingPage: getLandingPage(release, 'DEV CMB'),
      ewPage: getEwPage(release, 'DEV CMB'),
      tasUrl: getTasUrl(release, 'DEV CMB'),
      systemId: getSystemId(release, 'DEV CMB'),
      enable: isEnabled(release, 'DEV CMB')
    },
    {
      id: '2',
      tabTitle: release + ' DEP CMB',
      landingPage: getLandingPage(release, 'DEP CMB'),
      ewPage: getEwPage(release, 'DEP CMB'),
      tasUrl: getTasUrl(release, 'DEP CMB'),
      systemId: getSystemId(release, 'DEP CMB'),
      enable: isEnabled(release, 'DEP CMB')
    },
    {
      id: '3',
      tabTitle: release + ' DEV LKP',
      landingPage: getLandingPage(release, 'DEV LKP'),
      ewPage: getEwPage(release, 'DEV LKP'),
      tasUrl: getTasUrl(release, 'DEV LKP'),
      systemId: getSystemId(release, 'DEV LKP'),
      enable: isEnabled(release, 'DEV LKP')
    },
    {
      id: '4',
      tabTitle: release + ' DEP LKP',
      landingPage: getLandingPage(release, 'DEP LKP'),
      ewPage: getEwPage(release, 'DEP LKP'),
      tasUrl: getTasUrl(release, 'DEP LKP'),
      systemId: getSystemId(release, 'DEP LKP'),
      enable: isEnabled(release, 'DEP LKP')
    },
    {
      id: '5',
      tabTitle: release + ' BNT CMB',
      landingPage: getLandingPage(release, 'BNT CMB'),
      ewPage: getEwPage(release, 'BNT CMB'),
      tasUrl: getTasUrl(release, 'BNT CMB'),
      systemId: getSystemId(release, 'BNT CMB'),
      enable: isEnabled(release, 'BNT CMB')
    },
    {
      id: '6',
      tabTitle: release + ' BNT LKP',
      landingPage: getLandingPage(release, 'BNT LKP'),
      ewPage: getEwPage(release, 'BNT LKP'),
      tasUrl: getTasUrl(release, 'BNT LKP'),
      systemId: getSystemId(release, 'BNT LKP'),
      enable: isEnabled(release, 'BNT LKP')
    },
    {
      id: '7',
      tabTitle: release + ' SANITY',
      landingPage: getLandingPage(release, 'SANITY'),
      ewPage: getEwPage(release, 'SANITY'),
      tasUrl: getTasUrl(release, 'SANITY'),
      systemId: getSystemId(release, 'SANITY'),
      enable: isEnabled(release, 'SANITY')
    },
    {
      id: '8',
      tabTitle: 'RND TEST CMB',
      landingPage: getLandingPage(release, 'RND TEST CMB'),
      ewPage: getEwPage(release, 'RND TEST CMB'),
      tasUrl: getTasUrl(release, 'RND TEST CMB'),
      systemId: getSystemId(release, 'RND TEST CMB'),
      enable: isEnabled(release, 'RND TEST CMB')
    },
    {
      id: '9',
      tabTitle: 'RND TEST LKP',
      landingPage: getLandingPage(release, 'RND TEST LKP'),
      ewPage: getEwPage(release, 'RND TEST LKP'),
      tasUrl: getTasUrl(release, 'RND TEST LKP'),
      systemId: getSystemId(release, 'RND TEST LKP'),
      enable: isEnabled(release, 'RND TEST LKP')
    },
    {
      id: '10',
      tabTitle: 'VALIDATION TEST CMB',
      landingPage: getLandingPage(release, 'VALIDATION TEST CMB'),
      ewPage: getEwPage(release, 'VALIDATION TEST CMB'),
      tasUrl: getTasUrl(release, 'VALIDATION TEST CMB'),
      systemId: getSystemId(release, 'VALIDATION TEST CMB'),
      enable: isEnabled(release, 'VALIDATION TEST CMB')
    },
    {
      id: '11',
      tabTitle: 'VALIDATION TEST LKP',
      landingPage: getLandingPage(release, 'VALIDATION TEST LKP'),
      ewPage: getEwPage(release, 'VALIDATION TEST LKP'),
      tasUrl: getTasUrl(release, 'VALIDATION TEST LKP'),
      systemId: getSystemId(release, 'VALIDATION TEST LKP'),
      enable: isEnabled(release, 'VALIDATION TEST LKP')
    },
    {
      id: '12',
      tabTitle: 'REGIONAL TEST CMB',
      landingPage: getLandingPage(release, 'REGIONAL TEST CMB'),
      ewPage: getEwPage(release, 'REGIONAL TEST CMB'),
      tasUrl: getTasUrl(release, 'REGIONAL TEST CMB'),
      systemId: getSystemId(release, 'REGIONAL TEST CMB'),
      enable: isEnabled(release, 'REGIONAL TEST CMB')
    },
    {
      id: '13',
      tabTitle: 'REGIONAL TEST LKP',
      landingPage: getLandingPage(release, 'REGIONAL TEST LKP'),
      ewPage: getEwPage(release, 'REGIONAL TEST LKP'),
      tasUrl: getTasUrl(release, 'REGIONAL TEST LKP'),
      systemId: getSystemId(release, 'REGIONAL TEST LKP'),
      enable: isEnabled(release, 'REGIONAL TEST LKP')
    },
    {
      id: '14',
      tabTitle: 'TECH CMB',
      landingPage: getLandingPage(release, 'TECH CMB'),
      ewPage: getEwPage(release, 'TECH CMB'),
      tasUrl: getTasUrl(release, 'TECH CMB'),
      systemId: getSystemId(release, 'TECH CMB'),
      enable: isEnabled(release, 'TECH CMB')
    },
    {
      id: '15',
      tabTitle: 'TECH LKP',
      landingPage: getLandingPage(release, 'TECH LKP'),
      ewPage: getEwPage(release, 'TECH LKP'),
      tasUrl: getTasUrl(release, 'TECH LKP'),
      systemId: getSystemId(release, 'TECH LKP'),
      enable: isEnabled(release, 'TECH LKP')
    },
    {
      id: '16',
      tabTitle: 'MOB TEST CMB',
      landingPage: getLandingPage(release, 'MOB TEST CMB'),
      ewPage: getEwPage(release, 'MOB TEST CMB'),
      tasUrl: getTasUrl(release, 'MOB TEST CMB'),
      systemId: getSystemId(release, 'MOB TEST CMB'),
      enable: isEnabled(release, 'MOB TEST CMB')
    }
    ,
    {
      id: '17',
      tabTitle: 'MOB DEV CMB',
      landingPage: getLandingPage(release, 'MOB DEV CMB'),
      ewPage: getEwPage(release, 'MOB DEV CMB'),
      tasUrl: getTasUrl(release, 'MOB DEV CMB'),
      systemId: getSystemId(release, 'MOB DEV CMB'),
      enable: isEnabled(release, 'MOB DEV CMB')
    },
    {
      id: '18',
      tabTitle: 'MOB DEP CMB',
      landingPage: getLandingPage(release, 'MOB DEP CMB'),
      ewPage: getEwPage(release, 'MOB DEP CMB'),
      tasUrl: getTasUrl(release, 'MOB DEP CMB'),
      systemId: getSystemId(release, 'MOB DEP CMB'),
      enable: isEnabled(release, 'MOB DEP CMB')
    }
  ];

  return (
    <TabsContainer>
      <Tabs hidden={tabtype !== 'RELEASE'}>
        {tabs.map((tab, i) =>
          <TabsButton key={i} id={tab.id} disabled={currentTab === `${tab.id}`} onClick={(handleTabClick)} hidden={tab.enable === false}>{tab.tabTitle}</TabsButton>
        )}
      </Tabs>
      <TabsContent hidden={tabtype !== 'RELEASE'}>
        {tabs.map((tab, i) =>
          <div hidden={tab.enable === false} key={i}>
            {currentTab === `${tab.id}` &&
              <div>
                <table>
                  <tr>
                    <td>
                      <UrlContent href={tab.landingPage} target="_blank" rel="1" hidden={tab.landingPage === ""}>
                        {tab.landingPage}
                      </UrlContent>
                    </td>
                    <td>
                      <Button hidden={tab.landingPage === ""} onClick={() => navigator.clipboard.writeText(tab.landingPage)}> Copy Landing Url </Button>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <EwContent href={tab.ewPage} target="_blank" rel="2">
                        Go to Environment Page
                      </EwContent>
                      <span> : {tab.ewPage}</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <EwContent hidden={tab.tasUrl === ""}>
                        TAS URL : {tab.tasUrl}
                      </EwContent></td>
                  </tr>
                  <tr>
                    <td>
                      <EwContent hidden={tab.systemId === ""}>
                        System ID : {tab.systemId}
                      </EwContent></td>
                  </tr>
                </table>
              </div>}
          </div>
        )}
      </TabsContent>
    </TabsContainer>
  );
}

export default EnvTab;
