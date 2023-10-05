import React, { useState } from 'react';
import { Tabs, TabsContainer, TabsContent, TabsButton, UrlContent, EwContent } from "./styles";
import { ReleaseProps, InfoJsonDTO } from "../ContentBlock/types";
import JunkNavigationPageContent from "../../content/JunkNavigationPageContent.json";
import * as Constants from "../../common/contants";

const JunckTab = ({
  release, tabtype, subtabtype }: ReleaseProps) => {

  const handleTabClick = (e: React.ChangeEvent<any>) => {
    setCurrentTab(e.target.id);
  }

  const parseNavJson = (releaseInput: string, parentIndex: number, title: string): InfoJsonDTO => {
    var modal = {} as InfoJsonDTO;
    modal.enable = false;
    modal.url = "";
    modal.subtitle = "";

    for (const info of JunkNavigationPageContent.parent[parentIndex].section) {
      if (JunkNavigationPageContent.parent[parentIndex].release === releaseInput && info.key === title) {
        modal.enable = info.enable
        modal.url = info.url;
        modal.subtitle = info.subtitle;
        modal.infotitle = info.infotitle;
      }
    }
    return modal;
  }


  const getIndex = (release: string): number => {
    if (Constants.REPOSGIT === release) {
      return 0;
    }
    if (Constants.REPOSSVN === release) {
      return 1;
    }
    if (Constants.REALJUNK === release) {
      return 2;
    }
    return 0;
  }

  const getInfoUrl = (release: string, title: string): string => {
    return parseNavJson(release, getIndex(release), title).url;
  }

  const getInfoTitle = (release: string, title: string): string => {
    return parseNavJson(release, getIndex(release), title).infotitle;
  }

  const isEnabled = (release: string, title: string): boolean => {
    return parseNavJson(release, getIndex(release), title).enable;
  }

  const getSubTitle = (release: string, title: string): string => {
    return parseNavJson(release, getIndex(release), title).subtitle;
  }


  const [currentTab, setCurrentTab] = useState('1');

  const repoinfotabs = [
    {
      id: '1',
      infotitle: getInfoTitle(release, 'GIT1'),
      subtitle: "",
      url: getInfoUrl(release, 'GIT1'),
      enable: isEnabled(release, 'GIT1')
    },
    {
      id: '2',
      infotitle: getInfoTitle(release, 'GIT2'),
      subtitle: "",
      url: getInfoUrl(release, 'GIT2'),
      enable: isEnabled(release, 'GIT2')
    },
    {
      id: '3',
      infotitle: getInfoTitle(release, 'GIT3'),
      subtitle: "",
      url: getInfoUrl(release, 'GIT3'),
      enable: isEnabled(release, 'GIT3')
    },
    {
      id: '4',
      infotitle: getInfoTitle(release, 'SVN1'),
      subtitle: "",
      url: getInfoUrl(release, 'SVN1'),
      enable: isEnabled(release, 'SVN1')
    },
    {
      id: '5',
      infotitle: getInfoTitle(release, 'SVN2'),
      subtitle: "",
      url: getInfoUrl(release, 'SVN2'),
      enable: isEnabled(release, 'SVN2')
    },
    {
      id: '6',
      infotitle: getInfoTitle(release, 'SVN3'),
      subtitle: "",
      url: getInfoUrl(release, 'SVN3'),
      enable: isEnabled(release, 'SVN3')
    }
  ];

  const realjuncktabs = [
    {
      id: '1',
      infotitle: getInfoTitle(release, 'JUNK1'),
      subtitle: getSubTitle(release, 'JUNK1'),
      url: getInfoUrl(release, 'JUNK1'),
      enable: isEnabled(release, 'JUNK1')
    },
    {
      id: '2',
      infotitle: getInfoTitle(release, 'JUNK2'),
      subtitle: getSubTitle(release, 'JUNK2'),
      url: getInfoUrl(release, 'JUNK2'),
      enable: isEnabled(release, 'JUNK2')
    },
    {
      id: '3',
      infotitle: getInfoTitle(release, 'JUNK3'),
      subtitle: getSubTitle(release, 'JUNK3'),
      url: getInfoUrl(release, 'JUNK3'),
      enable: isEnabled(release, 'JUNK3')
    }
  ];

  return (
    <TabsContainer>
      <Tabs hidden={subtabtype !== 'REPO'}>
        {repoinfotabs.map((infotab, i) =>
          <TabsButton key={i} id={infotab.id} disabled={currentTab === `${infotab.id}`} onClick={(handleTabClick)} hidden={infotab.enable === false}>{infotab.infotitle}</TabsButton>
        )}
      </Tabs>
      <Tabs hidden={subtabtype !== 'REALJUNK'}>
        {realjuncktabs.map((junktab, i) =>
          <TabsButton key={i} id={junktab.id} disabled={currentTab === `${junktab.id}`} onClick={(handleTabClick)} hidden={junktab.enable === false}>{junktab.infotitle}</TabsButton>
        )}
      </Tabs>
      <TabsContent hidden={subtabtype !== 'REPO'}>
        {repoinfotabs.map((infotab, i) =>
          <div hidden={infotab.enable === false} key={i}>
            {currentTab === `${infotab.id}` &&
              <div>
                <table>
                  <tr>
                    <td>
                      <UrlContent href={infotab.url} target="_blank" rel="1">
                        Go to Bitbucket Page
                      </UrlContent>
                    </td>
                  </tr>

                </table>
              </div>}
          </div>
        )}
      </TabsContent>
      <TabsContent hidden={subtabtype !== 'REALJUNK'}>
        {realjuncktabs.map((junktab, i) =>
          <div hidden={junktab.enable === false} key={i}>
            {currentTab === `${junktab.id}` &&
              <div>
                <table>
                  <tr>
                    <td>
                      <EwContent>{junktab.subtitle}</EwContent>
                      <div></div>
                      <UrlContent href={junktab.url} target="_blank" rel="1">
                        Go to Page
                      </UrlContent>
                    </td>
                  </tr>

                </table>
              </div>}
          </div>
        )}
      </TabsContent>
    </TabsContainer>
  );
}
export default JunckTab;
