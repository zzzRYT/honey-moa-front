import { ConnectionListContent } from '@/apis/connection/type';

export interface ConnectionInfoProps {
  info: ConnectionListContent;
  direction: 'request' | 'requested';
}
