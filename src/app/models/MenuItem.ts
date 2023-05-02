export class MenuItem {
    public label! : string;
    public route!: string;
    public icon!: string | null;
    public subMenus!: MenuItem[] | null;
}