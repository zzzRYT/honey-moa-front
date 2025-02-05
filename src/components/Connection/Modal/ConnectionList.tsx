import * as S from './style';
import { ConnectionQueries } from '@/apis/connection';
import RequestSentConnections from './RequestSentConnections';
import RequestReceivedConnections from './RequestReceivedConnections';

export default function ConnectionList() {
  const requesterQuery = ConnectionQueries.GetConnectionListPaginationQuery({
    showRequest: true,
    type: 'requester',
  });
  const requestedQuery = ConnectionQueries.GetConnectionListPaginationQuery({
    showRequested: true,
    type: 'requested',
  });
  return (
    <S.ConnectionFeatureWrapper>
      <S.ListContainer>
        <h2>보낸 요청</h2>
        {requesterQuery && (
          <RequestSentConnections requestList={requesterQuery.contents} />
        )}
      </S.ListContainer>
      <S.ListContainer>
        <h2>받은 요청</h2>
        {requestedQuery && (
          <RequestReceivedConnections
            requestList={requestedQuery.contents}
          />
        )}
      </S.ListContainer>
    </S.ConnectionFeatureWrapper>
  );
}
