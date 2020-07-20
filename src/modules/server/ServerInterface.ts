export interface ServerInterface {

  listen(port: number): Promise<void>

}
