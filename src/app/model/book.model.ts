import {CommandLine} from './commandLine.model';
import {Style} from './style.model';

export class Book {

  public boId: number;
  public style: Style;
  public boAuthor: string;
  public boCover: string;
  public boEditor: string;
  public boIsbn: string;
  public boLanguage: string;
  public boPrice: number;
  public boReleaseDate: Date;
  public boStock: number;
  public boSynopsys: string;
  public boTitle: string;
  public boTopic: string;
  public commandLines: CommandLine[];

  constructor(boId: number, style: Style, boAuthor: string, boCover: string, boEditor: string, boIsbn: string, boLanguage: string, boPrice: number, boReleaseDate: Date, boStock: number, boSynopsys: string, boTitle: string, boTopic: string, commandLines: CommandLine[]) {
    this.boId = boId;
    this.style = style;
    this.boAuthor = boAuthor;
    this.boCover = boCover;
    this.boEditor = boEditor;
    this.boIsbn = boIsbn;
    this.boLanguage = boLanguage;
    this.boPrice = boPrice;
    this.boReleaseDate = boReleaseDate;
    this.boStock = boStock;
    this.boSynopsys = boSynopsys;
    this.boTitle = boTitle;
    this.boTopic = boTopic;
    this.commandLines = commandLines;
  }

}
