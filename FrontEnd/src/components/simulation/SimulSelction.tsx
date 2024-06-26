import { useState, useRef } from 'react'
import * as c from '@src/components/styles/simulation/SelectionStyle'
import SelectionStep1 from '@src/components/simulation/SelectionStep1'
import SelectionStep2 from '@src/components/simulation/SelectionStep2'
import SelectionStep3 from '@src/components/simulation/SelectionStep3'
import SelectionStep4 from '@src/components/simulation/SelectionStep4'
import SelectionStep5 from '@src/components/simulation/SelectionStep5'
import useSimulationStore from '@src/stores/simulationStore'
import useReportStore from '@src/stores/reportStore'
import LeftArrow from '@src/assets/angle_left.svg'
import Xmark from '@src/assets/xmark_solid_nomal.svg'

interface SimulSelctionProps {
  onClose: () => void
}

const SimulSelction = ({ onClose }: SimulSelctionProps) => {
  const [step, setStep] = useState<number>(1)
  const modalRef = useRef<HTMLDivElement>(null)
  const { resetSimulButton } = useSimulationStore()
  const { resetReportButton } = useReportStore()

  const resetButton = () => {
    resetSimulButton()
    resetReportButton()
  }

  const nextStep = () => {
    setTimeout(() => {
      setStep(prev => prev + 1)
    }, 100)
  }

  const prevStep = () => {
    setStep(next => next - 1)
  }

  // 외부 클릭시 닫힘
  // useEffect(() => {
  //   const closeModal = (e: MouseEvent) => {
  //     if (
  //       open &&
  //       modalRef.current &&
  //       !modalRef.current.contains(e.target as Node)
  //     ) {
  //       onClose()
  //       resetButton()
  //     }
  //   }
  //
  //   document.addEventListener('mousedown', closeModal)
  //   return () => {
  //     document.removeEventListener('mousedown', closeModal)
  //   }
  // }, [onClose, open])

  return (
    <c.Overlay>
      <c.Container ref={modalRef}>
        <c.SelctionHeader>
          <c.HeaderLeft>
            {step > 1 ? (
              <c.PrevIcon
                src={LeftArrow}
                alt="prev"
                onClick={() => prevStep()}
              />
            ) : null}
            <c.HeaderTitle>창업 시뮬레이션</c.HeaderTitle>
          </c.HeaderLeft>
          <c.HeaderRight>
            <c.CloseIcon
              src={Xmark}
              alt="close"
              onClick={() => {
                onClose()
                resetButton()
              }}
            />
          </c.HeaderRight>
        </c.SelctionHeader>
        <c.Contants>
          {step === 1 && (
            <c.FadeInContainer>
              <SelectionStep2 nextStep={nextStep} />
            </c.FadeInContainer>
          )}
          {step === 2 && (
            <c.FadeInContainer>
              <SelectionStep3 nextStep={nextStep} />
            </c.FadeInContainer>
          )}
          {step === 3 && (
            <c.FadeInContainer>
              <SelectionStep4 nextStep={nextStep} />
            </c.FadeInContainer>
          )}
          {step === 4 && (
            <c.FadeInContainer>
              <SelectionStep1 nextStep={nextStep} />
            </c.FadeInContainer>
          )}
          {step === 5 && (
            <c.FadeInContainer>
              <SelectionStep5 />
            </c.FadeInContainer>
          )}
        </c.Contants>
      </c.Container>
    </c.Overlay>
  )
}

export default SimulSelction
