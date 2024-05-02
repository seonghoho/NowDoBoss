import analysisStore from '@src/stores/analysisStore'
import * as s from '@src/components/styles/analysis/StoreCountAnalysisStyle'

const CloseChart = () => {
  const selectedService = analysisStore(state => state.selectedService)

  return (
    <s.CloseChart>
      <s.ChartTitle>폐업률</s.ChartTitle>
      <s.ChartSubTitleWrap>
        <s.ChartSubTitle>{selectedService.serviceCodeName}의</s.ChartSubTitle>
        <s.ChartSubTitle>폐업률은</s.ChartSubTitle>
        <s.ChartSubTitle>00% 이에요.</s.ChartSubTitle>
      </s.ChartSubTitleWrap>
    </s.CloseChart>
  )
}

export default CloseChart