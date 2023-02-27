const StepsContainer = ({ children }: { children: React.ReactNode }) => {
  return <ul className="steps">{children}</ul>
}

const Step = ({ children }: { children: React.ReactNode }) => {
  return <li className="step">{children}</li> 
}

const StepSecondary = ({ children }: { children: React.ReactNode }) => {
  return <li className="step step-secondary">{children}</li>
}

const StepAccent = ({ children }: { children: React.ReactNode }) => {
  return <li className="step step-accent">{children}</li> 
}

const StepError = ({ children }: { children: React.ReactNode }) => {
  return <li className="step step-error">{children}</li>
}

const StepWarning = ({ children }: { children: React.ReactNode }) => {
  return <li className="step step-warning">{children}</li> 
}

const StepNeutral = ({ children }: { children: React.ReactNode }) => {
  return <li className="step step-neutral">{children}</li> 
}

export {
  Step,
  StepAccent,
  StepError,
  StepNeutral,
  StepSecondary,
  StepWarning,
  StepsContainer
}