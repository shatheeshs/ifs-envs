export interface ContentBlockProps {
  icon: string;
  title: string;
  content: string;
  section?: any;
  button?: any;
  t?: any;
  id: string;
  type?: string;
}

export interface ReleaseProps {
  release: string;
  tabtype: string;
  subtabtype? : string;
}

export interface ReleaseJsonDTO {
  envtitle: string,
  url: string,
  ew : string,
  tasUrl: string,
  systemId: string,
  msg?: string,
  enable : boolean
}

export interface InfoJsonDTO {
  infotitle: string,
  subtitle: string,
  url: string,
  enable : boolean
}

