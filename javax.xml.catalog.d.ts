/// <reference path="java.lang.d.ts" />
/// <reference path="java.net.d.ts" />
/// <reference path="org.w3c.dom.ls.d.ts" />
/// <reference path="java.io.d.ts" />
/// <reference path="javax.xml.stream.d.ts" />
/// <reference path="java.util.stream.d.ts" />
/// <reference path="org.xml.sax.d.ts" />
/// <reference path="javax.xml.transform.d.ts" />
declare module '@afterburnerhq/javax.xml.catalog' { 
import { Enum, Throwable, Class, String, RuntimeException } from '@afterburnerhq/java.lang'
import { URI } from '@afterburnerhq/java.net'
import { LSResourceResolver, LSInput } from '@afterburnerhq/org.w3c.dom.ls'
import { InputStream } from '@afterburnerhq/java.io'
import { XMLResolver } from '@afterburnerhq/javax.xml.stream'
import { Stream } from '@afterburnerhq/java.util.stream'
import { InputSource, EntityResolver } from '@afterburnerhq/org.xml.sax'
import { URIResolver, Source } from '@afterburnerhq/javax.xml.transform'
export interface Catalog {

matchSystem(arg0: String): String;

matchPublic(arg0: String): String;

matchURI(arg0: String): String;

catalogs(): Stream<Catalog>;
 }

export class CatalogException extends RuntimeException {
constructor(arg0: String);
constructor(arg0: String, arg1: Throwable);
 }

export class CatalogFeatures {

static defaults(): CatalogFeatures;

get(arg0: CatalogFeatures.Feature): String;

static builder(): CatalogFeatures.Builder;
 }
export namespace CatalogFeatures { 
export class Builder {

with(arg0: CatalogFeatures.Feature, arg1: String): CatalogFeatures.Builder;

build(): CatalogFeatures;
 }

export class Feature extends Enum<CatalogFeatures.Feature> {
static FILES:CatalogFeatures.Feature
static PREFER:CatalogFeatures.Feature
static DEFER:CatalogFeatures.Feature
static RESOLVE:CatalogFeatures.Feature

static values(): CatalogFeatures.Feature[];

static valueOf(arg0: String): CatalogFeatures.Feature;

getPropertyName(): String;

defaultValue(): String;
/**
* DO NOT USE
*/
static valueOf<T extends Enum<T>>(arg0: Class<T>, arg1: String): T;
 }

}

export class CatalogManager {

static catalog(arg0: CatalogFeatures, arg1: URI[]): Catalog;

static catalogResolver(arg0: Catalog): CatalogResolver;

static catalogResolver(arg0: CatalogFeatures, arg1: URI[]): CatalogResolver;
 }

export interface CatalogResolver extends EntityResolver, XMLResolver, URIResolver, LSResourceResolver {

resolveEntity(arg0: String, arg1: String): InputSource;

resolve(arg0: String, arg1: String): Source;

resolveEntity(arg0: String, arg1: String, arg2: String, arg3: String): InputStream;

resolveResource(arg0: String, arg1: String, arg2: String, arg3: String, arg4: String): LSInput;
 }

}
