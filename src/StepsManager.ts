export interface Step {
  readonly index: number;
  readonly description: string;
}

export class StepsManager {
  public static readonly DataStep: Step = {
    index: 0,
    description: "DATA",
  };
  public static readonly ShippmentStep: Step = {
    index: 1,
    description: "SHIPPMENT",
  };
  public static readonly PaymentStep: Step = {
    index: 2,
    description: "PAYMENT",
  };

  currentStep: Step = StepsManager.DataStep;
  steps: Array<Step> = [
    StepsManager.DataStep,
    StepsManager.ShippmentStep,
    StepsManager.PaymentStep,
  ];

  constructor() {}
}
