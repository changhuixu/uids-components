export class InternalRoute {
  constructor(
    public text = '',
    public route = '',
    public subMenus?: InternalRoute[]
  ) {}
}
