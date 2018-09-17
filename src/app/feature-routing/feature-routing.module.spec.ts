import { FeatureRoutingModule } from './feature-routing.module';

describe('FeatureRoutingModule', () => {
  let featureRoutingModule: FeatureRoutingModule;

  beforeEach(() => {
    featureRoutingModule = new FeatureRoutingModule();
  });

  it('should create an instance', () => {
    expect(featureRoutingModule).toBeTruthy();
  });
});
