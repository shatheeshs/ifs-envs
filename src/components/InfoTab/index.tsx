import React, { useState } from 'react';
import { Tabs, TabsContainer, TabsContent, TabsButton, UrlContent } from "./styles";
import { ReleaseProps, InfoJsonDTO } from "../ContentBlock/types";
import InfoNavigationPageContent from "../../content/InfoNavigationPageContent.json";
import * as Constants from "../../common/contants";

const InfoTab = ({
  release, tabtype, subtabtype }: ReleaseProps) => {

  const handleTabClick = (e: React.ChangeEvent<any>) => {
    setCurrentTab(e.target.id);
  }

  const parseNavJson = (releaseInput: string, parentIndex: number, title: string): InfoJsonDTO => {
    var modal = {} as InfoJsonDTO;
    modal.enable = false;
    modal.url = "";
    modal.subtitle = "";

    for (const info of InfoNavigationPageContent.parent[parentIndex].section) {
      if (InfoNavigationPageContent.parent[parentIndex].release === releaseInput && info.key === title) {
        modal.enable = info.enable
        modal.url = info.url;
        modal.subtitle = info.subtitle;
        modal.infotitle = info.infotitle;
      }
    }
    return modal;
  }


  const getIndex = (release: string): number => {
    if (Constants.BUILDMASTER === release) {
      return 0;
    }
    if (Constants.BUILDBACKUP === release) {
      return 1;
    }
    if (Constants.TOUCHAPPMASTER === release) {
      return 2;
    }
    if (Constants.TOUCHAPPBACKUP === release) {
      return 3;
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


  const [currentTab, setCurrentTab] = useState('1');

  const serverinfotabs = [
    {
      id: '1',
      infotitle: getInfoTitle(release, 'MASTER1'),
      subtitle: "",
      url: getInfoUrl(release, 'MASTER1'),
      enable: isEnabled(release, 'MASTER1')
    },
    {
      id: '2',
      infotitle: getInfoTitle(release, 'MASTER2'),
      subtitle: "",
      url: getInfoUrl(release, 'MASTER2'),
      enable: isEnabled(release, 'MASTER2')
    },
    {
      id: '3',
      infotitle: getInfoTitle(release, 'BACKUP1'),
      subtitle: "",
      url: getInfoUrl(release, 'BACKUP1'),
      enable: isEnabled(release, 'BACKUP1')
    },
    {
      id: '4',
      infotitle: getInfoTitle(release, 'BACKUP2'),
      subtitle: "",
      url: getInfoUrl(release, 'BACKUP2'),
      enable: isEnabled(release, 'BACKUP2')
    }
  ];

  const touchappinfotabs = [
    {
      id: '1',
      infotitle: getInfoTitle(release, 'MASTER1'),
      subtitle: "",
      url: getInfoUrl(release, 'MASTER1'),
      enable: isEnabled(release, 'MASTER1')
    },
    {
      id: '2',
      infotitle: getInfoTitle(release, 'MASTER2'),
      subtitle: "",
      url: getInfoUrl(release, 'MASTER2'),
      enable: isEnabled(release, 'MASTER2')
    },
    {
      id: '3',
      infotitle: getInfoTitle(release, 'MASTER3'),
      subtitle: "",
      url: getInfoUrl(release, 'MASTER3'),
      enable: isEnabled(release, 'MASTER3')
    },
    {
      id: '4',
      infotitle: getInfoTitle(release, 'BACKUP1'),
      subtitle: "",
      url: getInfoUrl(release, 'BACKUP1'),
      enable: isEnabled(release, 'BACKUP1')
    },
    {
      id: '5',
      infotitle: getInfoTitle(release, 'BACKUP2'),
      subtitle: "",
      url: getInfoUrl(release, 'BACKUP2'),
      enable: isEnabled(release, 'BACKUP2')
    }
  ];

  return (
    <TabsContainer>
      <Tabs hidden={subtabtype !== 'JENKINS'}>
        {serverinfotabs.map((infotab, i) =>
          <TabsButton key={i} id={infotab.id} disabled={currentTab === `${infotab.id}`} onClick={(handleTabClick)} hidden={infotab.enable === false}>{infotab.infotitle}</TabsButton>
        )}
      </Tabs>
      <Tabs hidden={subtabtype !== 'TOUCHAPPS'}>
        {touchappinfotabs.map((touchapptab, i) =>
          <TabsButton key={i} id={touchapptab.id} disabled={currentTab === `${touchapptab.id}`} onClick={(handleTabClick)} hidden={touchapptab.enable === false}>{touchapptab.infotitle}</TabsButton>
        )}
      </Tabs>
      <TabsContent hidden={subtabtype !== 'JENKINS'}>
        {serverinfotabs.map((infotab, i) =>
          <div hidden={infotab.enable === false} key={i}>
            {currentTab === `${infotab.id}` &&
              <div>
                <table>
                  <tr>
                    <td>
                      <UrlContent href={infotab.url} target="_blank" rel="1">
                        Go to Jenkins Page
                      </UrlContent>
                    </td>
                  </tr>

                </table>
              </div>}
          </div>
        )}
      </TabsContent>
      <TabsContent hidden={subtabtype !== 'TOUCHAPPS'}>
        {touchappinfotabs.map((touchapptab, i) =>
          <div hidden={touchapptab.enable === false} key={i}>
            {currentTab === `${touchapptab.id}` &&
              <div>
                <table>
                  <tr>
                    <td>
                      <UrlContent href={touchapptab.url} target="_blank" rel="1">
                        Go to TouchAPP Server Page
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
export default InfoTab;
