/**
* Appcelerator Titanium Mobile
* This is generated code. Do not modify. Your changes *will* be lost.
* Generated code is Copyright (c) 2009-2011 by Appcelerator, Inc.
* All Rights Reserved.
*/
#import <Foundation/Foundation.h>
#import "TiUtils.h"
#import "ApplicationDefaults.h"
 
@implementation ApplicationDefaults
  
+ (NSMutableDictionary*) copyDefaults
{
    NSMutableDictionary * _property = [[NSMutableDictionary alloc] init];

    [_property setObject:[TiUtils stringValue:@"uWZ47NFJrn4IOgK5FfyFQjcyDpNBRCCW"] forKey:@"acs-oauth-secret-production"];
    [_property setObject:[TiUtils stringValue:@"C2N1A44El88OLWqIyMSoLP823gCter6j"] forKey:@"acs-oauth-key-production"];
    [_property setObject:[TiUtils stringValue:@"Z4Q5ZJmBmpee2GZhsEOiEvGiznF7lRBH"] forKey:@"acs-api-key-production"];
    [_property setObject:[TiUtils stringValue:@"ybIKPeGUFmpL0ELwGxTKKjJxTCOaO0Ht"] forKey:@"acs-oauth-secret-development"];
    [_property setObject:[TiUtils stringValue:@"6myJIoal9CYaLfbfWtrH57OmlxfEm7ZN"] forKey:@"acs-oauth-key-development"];
    [_property setObject:[TiUtils stringValue:@"FkhnT89lh8zXUcWQPmgyxbykKg4jVEpR"] forKey:@"acs-api-key-development"];
    [_property setObject:[TiUtils stringValue:@"system"] forKey:@"ti.ui.defaultunit"];

    return _property;
}
@end
