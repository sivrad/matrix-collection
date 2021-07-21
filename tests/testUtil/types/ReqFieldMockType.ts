import { MatrixBaseType, MatrixBaseTypeData, schema } from '../../../src/core';

/**
 * Serialized Req Field Mock.
 */

export interface ReqFieldMockData extends MatrixBaseTypeData {
    /**
     * My Foo.
     */
    foo: string;
}

/**
 * Matrix Type Mock Type.
 *
 * A mock type.
 */
export class ReqFieldMockType extends MatrixBaseType {
    protected static fields: Record<string, schema.Field> = {
        foo: {
            type: 'string',
            label: 'Foo',
            description: 'My foo.',
            defaultValue: null,
            flags: [],
            example: null,
        },
    };
    static _fieldValues: Record<string, unknown> = {};
    static classInformation = {
        collection: 'tst',
        name: 'ReqFieldMockType',
        label: 'Required Field Mock Type',
        description: 'A mock type.',
        icon: 'URL',
        flags: [],
    };

    /**
     * Constructor for the Mock Type.
     * @param {MockData} data Serialized data or instance ID.
     */
    constructor(data: MatrixBaseTypeData) {
        super(data);
    }

    /**
     * Get an instance of the type from the ID.
     * @param   {string} id The ID of the instance.
     * @returns {T}         The new instance of the type.
     */
    static async get<T extends MatrixBaseType = ReqFieldMockType>(
        id: string,
    ): Promise<T> {
        return await super.get<T>(id);
    }

    /**
     * Get all the instances of a type.
     * @returns {T[]}  All the new instances.
     */
    static async getAll<T extends MatrixBaseType = ReqFieldMockType>(): Promise<
        T[]
    > {
        return await super.getAll<T>();
    }

    /**
     * Get the class of the type.
     * @returns {T}  The type class.
     */
    getTypeClass<T = typeof ReqFieldMockType>(): T {
        return (ReqFieldMockType as unknown) as T;
    }

    /**
     * Retrive the Foo field.
     * @returns {string | null}  Result.
     */
    getFoo(): string | null {
        return this.getFieldValue<string | null>('foo');
    }

    /**
     * Set the Foo field.
     * @param   {number | null} value The value to set.
     * @returns {void}
     */
    setFoo(value: string | null): void {
        this.setFieldValue('foo', value);
    }
}
