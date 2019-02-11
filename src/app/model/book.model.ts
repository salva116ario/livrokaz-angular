import {CommandLine} from './commandLine.model';
import {Style} from './style.model';

export class Book {

  private boId: number;
  private style: Style;
  private boAuthor: string;
  private boCover: string;
  private boEditor: string;
  private boIsbn: string;
  private boLanguage: string;
  private boPrice: number;
  private boReleaseDate: Date;
  private boStock: number;
  private boSynopsys: string;
  private boTitle: string;
  private boTopic: string;
  private commandLines: CommandLine[];

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

  get _boId(): number {
    return this.boId;
  }

  set _boId(value: number) {
    this.boId = value;
  }

  get _style(): Style {
    return this.style;
  }

  set _style(value: Style) {
    this.style = value;
  }

  get _boAuthor(): string {
    return this.boAuthor;
  }

  set _boAuthor(value: string) {
    this.boAuthor = value;
  }

  get _boCover(): string {
    return this.boCover;
  }

  set _boCover(value: string) {
    this.boCover = value;
  }

  get _boEditor(): string {
    return this.boEditor;
  }

  set _boEditor(value: string) {
    this.boEditor = value;
  }

  get _boIsbn(): string {
    return this.boIsbn;
  }

  set _boIsbn(value: string) {
    this.boIsbn = value;
  }

  get _boLanguage(): string {
    return this.boLanguage;
  }

  set _boLanguage(value: string) {
    this.boLanguage = value;
  }

  get _boPrice(): number {
    return this.boPrice;
  }

  set _boPrice(value: number) {
    this.boPrice = value;
  }

  get _boReleaseDate(): Date {
    return this.boReleaseDate;
  }

  set _boReleaseDate(value: Date) {
    this.boReleaseDate = value;
  }

  get _boStock(): number {
    return this.boStock;
  }

  set _boStock(value: number) {
    this.boStock = value;
  }

  get _boSynopsys(): string {
    return this.boSynopsys;
  }

  set _boSynopsys(value: string) {
    this.boSynopsys = value;
  }

  get _boTitle(): string {
    return this.boTitle;
  }

  set _boTitle(value: string) {
    this.boTitle = value;
  }

  get _boTopic(): string {
    return this.boTopic;
  }

  set _boTopic(value: string) {
    this.boTopic = value;
  }

  get _commandLines(): CommandLine[] {
    return this.commandLines;
  }

  set _commandLines(value: CommandLine[]) {
    this.commandLines = value;
  }
}
