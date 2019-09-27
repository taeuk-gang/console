import { K8sResourceKind, k8sPatch } from '@console/internal/module/k8s';
import { BareMetalHostModel } from '../../models';

export const powerOffHost = (host: K8sResourceKind) =>
  k8sPatch(BareMetalHostModel, host, [{ op: 'replace', path: '/spec/online', value: false }]);

export const powerOnHost = (host: K8sResourceKind) =>
  k8sPatch(BareMetalHostModel, host, [{ op: 'replace', path: '/spec/online', value: true }]);
