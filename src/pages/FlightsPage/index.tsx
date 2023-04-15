import styled from 'styled-components';
import Header from '../../common/components/Header/Header';
import FilterSideBar from '../../common/components/FilterSidebar/FilterSidebar';
import FlightsList from '../../common/components/FlightsList/FlightsList';
import Footer from '../../common/components/Footer/Footer';

const FlightsPageWrapper = styled.div`
  width: 100%;
  height: 100vh;
  margin: 0;
  padding: 0;
  overflow-x: hidden;
  overflow-y: scroll;
  display: grid;
  background-color: ${({ theme }) => theme.colors.body};

  ${({ theme }) => theme.mq.desktop} {
    grid-template-rows: 6.25rem 1fr 4.4rem;
    grid-template-columns: 400px 1fr;
  }

  ${({ theme }) => theme.mq.smartphone} {
    grid-template-rows: 6.25rem 3rem 1fr 4.4rem;
    grid-template-columns: 1fr;
  }
`;

const FlightsPage = () => {
  return (
    <FlightsPageWrapper>
      <Header />
      <FilterSideBar />
      <FlightsList />
      <Footer />
    </FlightsPageWrapper>
  );
};

export default FlightsPage;
