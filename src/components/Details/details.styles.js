import styled from "styled-components"

export const Detailscontainer = styled.div`
  display: flex;
  margin: 160px 165px;
  font-size: 15px;
  flex-direction: column;
  @media (max-width: 768px) {
    margin: 120px 39px 0px 39px;
  }
  @media (max-width: 386px) {
    margin: 120px 24px 0px 24px;
    align-items: center;
    justify-content: center;
  }
`

export const Cardcontainer = styled.div`
  display: flex;
  &:nth-child() {
    width: 50%;
  }
  @media (max-width: 386px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`

export const Isnewcontainer = styled.span`
  font-size: 14px;
  letter-spacing: 10px;
`
export const Title = styled.span`
  font-size: 40px;
  font-weight: bold;
  line-height: 44px;
`
export const Datafeactures = styled.span`
  font-size: 32px;
  font-weight: bold;
  line-height: 36px;
  width: 60%;
  @media (max-width: 386px) {
    width: 100%;
  }
`
export const Data = styled.span`
  font-size: 32px;
  font-weight: bold;
  line-height: 36px;
  width: 40%;
  text-transform: uppercase;
  @media (max-width: 386px) {
    width: 100%;
    text-align: center;
  }
`
export const Paragraph = styled.p`
  font-weight: normal;
  font-size: 15px;
  line-height: 25px;
`
export const DescriptionContainer = styled.div`
  display: flex;
  gap: 125px;
  margin-top: 160px;
  @media (max-width: 386px) {
    flex-direction: column;
    text-align: left;
  }
`
export const Pricecontainer = styled.span`
  font-size: 18px;
  font-weight: bold;
`

export const Infocontainer = styled.div`
  max-width: 445px;
  display: flex;
  justify-content: center;
  flex-direction: column;
`

export const Articles = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  gap: 16px;
`

export const Table = styled.div`
  font-size: 15px;
  font-weight: normal;
  text-transform: capitalize;
`
export const Number = styled.td`
  color: orange;
  font-weight: bold;
`

export const Imagescontainer = styled.div`
  display: flex;
  gap: 30px;
  align-items: center;
  margin-top: 160px;
  @media (max-width: 386px) {
    flex-direction: column;
  }
`
