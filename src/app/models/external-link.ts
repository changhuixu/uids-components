export class ExternalLink {
  constructor(
    public text = '',
    public url = '',
    public target: '_blank' | '_self' | '_parent' | '_top' = '_blank'
  ) {}
}
